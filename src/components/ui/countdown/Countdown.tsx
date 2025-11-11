import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Countdown.css";

const countdownVariants = cva("moz-ctd");

export interface CountdownProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof countdownVariants> {}

export interface CountdownValueProps extends HTMLAttributes<HTMLSpanElement> {
	value: number;
	digits?: 2 | 3;
}

export const Countdown = forwardRef<HTMLSpanElement, CountdownProps>(
	({ className, ...props }, ref) => {
		return (
			<span
				className={cn(countdownVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CountdownValue = forwardRef<HTMLSpanElement, CountdownValueProps>(
	({ className, value, digits, children, ...props }, ref) => {
		const style = {
			"--value": value,
			...(digits && { "--digits": digits }),
		} as React.CSSProperties;

		return (
			<span
				className={className}
				style={style}
				aria-live="polite"
				aria-label={value.toString()}
				ref={ref}
				{...props}
			>
				{children ?? value}
			</span>
		);
	}
);

Countdown.displayName = "Countdown";
CountdownValue.displayName = "CountdownValue";
