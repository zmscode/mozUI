import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { DayPicker } from "react-day-picker";

const inputVariants = cva("input", {
	variants: {
		style: {
			ghost: "input-ghost",
		},
		color: {
			neutral: "input-neutral",
			primary: "input-primary",
			secondary: "input-secondary",
			accent: "input-accent",
			info: "input-info",
			success: "input-success",
			warning: "input-warning",
			error: "input-error",
		},
		size: {
			xs: "input-xs",
			sm: "input-sm",
			default: "input-md",
			lg: "input-lg",
			xl: "input-xl",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

function TimePicker({
	value,
	onChange,
	className,
}: {
	value: string;
	onChange: (time: string) => void;
	className?: string;
}) {
	const [hours, setHours] = React.useState(
		value ? Number.parseInt(value.split(":")[0]) : 12
	);
	const [minutes, setMinutes] = React.useState(
		value ? Number.parseInt(value.split(":")[1]) : 0
	);
	const [period, setPeriod] = React.useState<"AM" | "PM">(
		value && Number.parseInt(value.split(":")[0]) >= 12 ? "PM" : "AM"
	);

	const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
	const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	const updateTime = (h: number, m: number, p: "AM" | "PM") => {
		let hour24 = h;
		if (p === "PM" && h !== 12) hour24 = h + 12;
		if (p === "AM" && h === 12) hour24 = 0;
		const timeString = `${hour24.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
		onChange(timeString);
	};

	const incrementHours = () => {
		const newHours = hours === 12 ? 1 : hours + 1;
		setHours(newHours);
		updateTime(newHours, minutes, period);
	};

	const decrementHours = () => {
		const newHours = hours === 1 ? 12 : hours - 1;
		setHours(newHours);
		updateTime(newHours, minutes, period);
	};

	const incrementMinutes = () => {
		setMinutes((prev) => {
			const newMinutes = prev === 59 ? 0 : prev + 1;
			updateTime(hours, newMinutes, period);
			return newMinutes;
		});
	};

	const decrementMinutes = () => {
		setMinutes((prev) => {
			const newMinutes = prev === 0 ? 59 : prev - 1;
			updateTime(hours, newMinutes, period);
			return newMinutes;
		});
	};

	const togglePeriod = () => {
		const newPeriod = period === "AM" ? "PM" : "AM";
		setPeriod(newPeriod);
		updateTime(hours, minutes, newPeriod);
	};

	const startHold = (callback: () => void) => {
		callback();
		timeoutRef.current = setTimeout(() => {
			intervalRef.current = setInterval(callback, 50);
		}, 500);
	};

	const stopHold = React.useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	React.useEffect(() => {
		return () => {
			stopHold();
		};
	}, [stopHold]);

	return (
		<div className={cn("flex items-center gap-2 justify-center", className)}>
			<div className="flex flex-col items-center gap-1">
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onMouseDown={() => startHold(incrementHours)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(incrementHours)}
					onTouchEnd={stopHold}
				>
					▲
				</button>
				<div className="text-2xl font-bold w-12 text-center">
					{hours.toString().padStart(2, "0")}
				</div>
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onMouseDown={() => startHold(decrementHours)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(decrementHours)}
					onTouchEnd={stopHold}
				>
					▼
				</button>
			</div>
			<div className="text-2xl font-bold">:</div>
			<div className="flex flex-col items-center gap-1">
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onMouseDown={() => startHold(incrementMinutes)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(incrementMinutes)}
					onTouchEnd={stopHold}
				>
					▲
				</button>
				<div className="text-2xl font-bold w-12 text-center">
					{minutes.toString().padStart(2, "0")}
				</div>
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onMouseDown={() => startHold(decrementMinutes)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(decrementMinutes)}
					onTouchEnd={stopHold}
				>
					▼
				</button>
			</div>
			<div className="flex flex-col items-center gap-1">
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onClick={togglePeriod}
				>
					▲
				</button>
				<div className="text-lg font-bold w-12 text-center">{period}</div>
				<button
					type="button"
					className="btn btn-xs btn-ghost"
					onClick={togglePeriod}
				>
					▼
				</button>
			</div>
		</div>
	);
}

export interface InputProps
	extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			"color" | "size" | "style"
		>,
		VariantProps<typeof inputVariants> {
	onDateSelect?: (date: Date | undefined) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, style, color, size, type, onDateSelect, ...props }, ref) => {
		const [selected, setSelected] = React.useState<Date | undefined>();
		const [timeValue, setTimeValue] = React.useState<string>("");
		const [isOpen, setIsOpen] = React.useState(false);
		const containerRef = React.useRef<HTMLDivElement>(null);

		React.useEffect(() => {
			if (type !== "date" && type !== "datetime-local" && type !== "time")
				return;

			const handleClickOutside = (event: MouseEvent) => {
				if (
					containerRef.current &&
					!containerRef.current.contains(event.target as Node)
				) {
					setIsOpen(false);
				}
			};

			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [type]);

		const handleDaySelect = (date: Date | undefined) => {
			if (!date) {
				setSelected(undefined);
				if (onDateSelect) {
					onDateSelect(undefined);
				}
				return;
			}

			if (type === "datetime-local" && timeValue) {
				const [hours, minutes] = timeValue.split(":").map(Number);
				date.setHours(hours, minutes, 0, 0);
			}

			setSelected(date);
			if (type === "date") {
				setIsOpen(false);
			}
			if (onDateSelect) {
				onDateSelect(date);
			}
		};

		const handleTimeChange = (time: string) => {
			setTimeValue(time);

			if (selected && time) {
				const [hours, minutes] = time.split(":").map(Number);
				const newDate = new Date(selected);
				newDate.setHours(hours, minutes, 0, 0);
				setSelected(newDate);
				if (onDateSelect) {
					onDateSelect(newDate);
				}
			} else if (!selected && time && type === "time") {
				const [hours, minutes] = time.split(":").map(Number);
				const newDate = new Date();
				newDate.setHours(hours, minutes, 0, 0);
				setSelected(newDate);
				if (onDateSelect) {
					onDateSelect(newDate);
				}
			}
		};

		if (type === "date") {
			return (
				<div ref={containerRef} className="relative w-full">
					<input
						type="text"
						className={cn(
							inputVariants({ style, color, size, className }),
							"cursor-pointer"
						)}
						ref={ref}
						value={selected ? selected.toLocaleDateString() : ""}
						onClick={() => setIsOpen(!isOpen)}
						readOnly
						placeholder={
							typeof props.placeholder === "string"
								? props.placeholder
								: "Pick a date"
						}
						{...props}
					/>
					{isOpen && (
						<div className="absolute z-10 mt-2 bg-base-100 border border-base-300 shadow-lg rounded-box p-4">
							<DayPicker
								className="react-day-picker"
								mode="single"
								selected={selected}
								onSelect={handleDaySelect}
							/>
						</div>
					)}
				</div>
			);
		}

		if (type === "datetime-local") {
			return (
				<div ref={containerRef} className="relative w-full">
					<input
						type="text"
						className={cn(
							inputVariants({ style, color, size, className }),
							"cursor-pointer"
						)}
						ref={ref}
						value={
							selected
								? `${selected.toLocaleDateString()} ${selected.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
								: ""
						}
						onClick={() => setIsOpen(!isOpen)}
						readOnly
						placeholder={
							typeof props.placeholder === "string"
								? props.placeholder
								: "Pick a date and time"
						}
						{...props}
					/>
					{isOpen && (
						<div className="absolute z-10 mt-2 bg-base-100 border border-base-300 shadow-lg rounded-box p-4 space-y-4">
							<DayPicker
								className="react-day-picker"
								mode="single"
								selected={selected}
								onSelect={handleDaySelect}
							/>
							<div className="divider my-2" />
							<TimePicker value={timeValue} onChange={handleTimeChange} />
							<button
								type="button"
								className="btn btn-primary btn-sm w-full"
								onClick={() => setIsOpen(false)}
							>
								Done
							</button>
						</div>
					)}
				</div>
			);
		}

		if (type === "time") {
			return (
				<div ref={containerRef} className="relative w-full">
					<input
						type="text"
						className={cn(
							inputVariants({ style, color, size, className }),
							"cursor-pointer"
						)}
						ref={ref}
						value={
							timeValue
								? (() => {
										const [hours, minutes] = timeValue.split(":");
										const hour24 = Number.parseInt(hours);
										const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
										const period = hour24 >= 12 ? "PM" : "AM";
										return `${hour12.toString().padStart(2, "0")}:${minutes} ${period}`;
									})()
								: ""
						}
						onClick={() => setIsOpen(!isOpen)}
						readOnly
						placeholder={
							typeof props.placeholder === "string"
								? props.placeholder
								: "Pick a time"
						}
						{...props}
					/>
					{isOpen && (
						<div className="absolute z-10 mt-2 bg-base-100 border border-base-300 shadow-lg rounded-box p-4 space-y-4">
							<TimePicker value={timeValue} onChange={handleTimeChange} />
							<button
								type="button"
								className="btn btn-primary btn-sm w-full"
								onClick={() => setIsOpen(false)}
							>
								Done
							</button>
						</div>
					)}
				</div>
			);
		}

		return (
			<input
				type={type}
				className={cn(inputVariants({ style, color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

export { Input, inputVariants };
