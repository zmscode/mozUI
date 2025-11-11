import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/tailwind";
import { Button } from "../ui/button/Button";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

export interface TimePickerProps {
	value: string;
	onChange: (time: string) => void;
	className?: string;
	color?:
		| "primary"
		| "secondary"
		| "accent"
		| "info"
		| "success"
		| "warning"
		| "error";
	showSeconds?: boolean;
}

export const TimePicker = ({
	value,
	onChange,
	className,
	color,
	showSeconds = false,
}: TimePickerProps) => {
	const [hours, setHours] = useState(
		value ? Number.parseInt(value.split(":")[0]) : 12
	);
	const [minutes, setMinutes] = useState(
		value ? Number.parseInt(value.split(":")[1]) : 0
	);
	const [seconds, setSeconds] = useState(
		value?.split(":")[2] ? Number.parseInt(value.split(":")[2]) : 0
	);
	const [period, setPeriod] = useState<"AM" | "PM">(
		value && Number.parseInt(value.split(":")[0]) >= 12 ? "PM" : "AM"
	);

	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const updateTime = (h: number, m: number, s: number, p: "AM" | "PM") => {
		let hour24 = h;
		if (p === "PM" && h !== 12) hour24 = h + 12;
		if (p === "AM" && h === 12) hour24 = 0;
		const timeString = showSeconds
			? `${hour24.toString().padStart(2, "0")}:${m
					.toString()
					.padStart(2, "0")}:${s.toString().padStart(2, "0")}`
			: `${hour24.toString().padStart(2, "0")}:${m
					.toString()
					.padStart(2, "0")}`;
		onChange(timeString);
	};

	const incrementHours = () => {
		const newHours = hours === 12 ? 1 : hours + 1;
		setHours(newHours);
		updateTime(newHours, minutes, seconds, period);
	};

	const decrementHours = () => {
		const newHours = hours === 1 ? 12 : hours - 1;
		setHours(newHours);
		updateTime(newHours, minutes, seconds, period);
	};

	const incrementMinutes = () => {
		setMinutes((prev) => {
			const newMinutes = prev === 59 ? 0 : prev + 1;
			updateTime(hours, newMinutes, seconds, period);
			return newMinutes;
		});
	};

	const decrementMinutes = () => {
		setMinutes((prev) => {
			const newMinutes = prev === 0 ? 59 : prev - 1;
			updateTime(hours, newMinutes, seconds, period);
			return newMinutes;
		});
	};

	const incrementSeconds = () => {
		setSeconds((prev) => {
			const newSeconds = prev === 59 ? 0 : prev + 1;
			updateTime(hours, minutes, newSeconds, period);
			return newSeconds;
		});
	};

	const decrementSeconds = () => {
		setSeconds((prev) => {
			const newSeconds = prev === 0 ? 59 : prev - 1;
			updateTime(hours, minutes, newSeconds, period);
			return newSeconds;
		});
	};

	const togglePeriod = () => {
		const newPeriod = period === "AM" ? "PM" : "AM";
		setPeriod(newPeriod);
		updateTime(hours, minutes, seconds, newPeriod);
	};

	const startHold = (callback: () => void) => {
		callback();
		timeoutRef.current = setTimeout(() => {
			intervalRef.current = setInterval(callback, 50);
		}, 500);
	};

	const stopHold = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	useEffect(() => {
		return () => {
			stopHold();
		};
	}, [stopHold]);

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div className="flex flex-col items-center gap-0.5 min-w-8">
				<Button
					type="button"
					color={color}
					shape="circle"
					style="soft"
					onMouseDown={() => startHold(incrementHours)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(incrementHours)}
					onTouchEnd={stopHold}
				>
					<CaretUpIcon size={12} />
				</Button>
				<div className="text-base font-semibold w-full text-center">
					{hours.toString().padStart(2, "0")}
				</div>
				<Button
					type="button"
					color={color}
					shape="circle"
					style="soft"
					onMouseDown={() => startHold(decrementHours)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(decrementHours)}
					onTouchEnd={stopHold}
				>
					<CaretDownIcon size={12} />
				</Button>
			</div>
			<div className="text-base font-semibold">:</div>
			<div className="flex flex-col items-center gap-0.5 min-w-8">
				<Button
					type="button"
					color={color}
					shape="circle"
					style="soft"
					onMouseDown={() => startHold(incrementMinutes)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(incrementMinutes)}
					onTouchEnd={stopHold}
				>
					<CaretUpIcon size={12} />
				</Button>
				<div className="text-base font-semibold w-full text-center">
					{minutes.toString().padStart(2, "0")}
				</div>
				<Button
					type="button"
					color={color}
					shape="circle"
					style="soft"
					onMouseDown={() => startHold(decrementMinutes)}
					onMouseUp={stopHold}
					onMouseLeave={stopHold}
					onTouchStart={() => startHold(decrementMinutes)}
					onTouchEnd={stopHold}
				>
					<CaretDownIcon size={12} />
				</Button>
			</div>
			{showSeconds && (
				<>
					<div className="text-base font-semibold">:</div>
					<div className="flex flex-col items-center gap-0.5 min-w-8">
						<Button
							type="button"
							color={color}
							shape="circle"
							style="soft"
							onMouseDown={() => startHold(incrementSeconds)}
							onMouseUp={stopHold}
							onMouseLeave={stopHold}
							onTouchStart={() => startHold(incrementSeconds)}
							onTouchEnd={stopHold}
						>
							<CaretUpIcon size={12} />
						</Button>
						<div className="text-base font-semibold w-full text-center">
							{seconds.toString().padStart(2, "0")}
						</div>
						<Button
							type="button"
							color={color}
							shape="circle"
							style="soft"
							onMouseDown={() => startHold(decrementSeconds)}
							onMouseUp={stopHold}
							onMouseLeave={stopHold}
							onTouchStart={() => startHold(decrementSeconds)}
							onTouchEnd={stopHold}
						>
							<CaretDownIcon size={12} />
						</Button>
					</div>
				</>
			)}
			<div className="text-base font-semibold opacity-0 select-none pointer-events-none">
				:
			</div>
			<div className="flex flex-col items-center gap-0.5 min-w-8">
				<Button
					type="button"
					color={color}
					style="soft"
					shape="circle"
					onClick={togglePeriod}
				>
					<CaretUpIcon size={12} />
				</Button>
				<div className="text-base font-semibold w-full text-center">
					{period}
				</div>
				<Button
					type="button"
					color={color}
					style="soft"
					shape="circle"
					onClick={togglePeriod}
				>
					<CaretDownIcon size={12} />
				</Button>
			</div>
		</div>
	);
};
