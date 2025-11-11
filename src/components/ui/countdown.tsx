import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const countdownVariants = cva("countdown");

export interface CountdownProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof countdownVariants> {}

export interface CountdownValueProps
	extends React.HTMLAttributes<HTMLSpanElement> {
	value: number;
	digits?: 2 | 3;
}

const Countdown = React.forwardRef<HTMLSpanElement, CountdownProps>(
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

const CountdownValue = React.forwardRef<HTMLSpanElement, CountdownValueProps>(
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

export { Countdown, CountdownValue, countdownVariants };
