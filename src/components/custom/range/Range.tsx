import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";
import "./Range.css";

const rangeVariants = cva("moz-rng", {
	variants: {
		color: {
			primary: "moz-rng-primary",
			secondary: "moz-rng-secondary",
			accent: "moz-rng-accent",
			neutral: "moz-rng-neutral",
			info: "moz-rng-info",
			success: "moz-rng-success",
			warning: "moz-rng-warning",
			error: "moz-rng-error",
		},
		size: {
			xs: "moz-rng-xs",
			sm: "moz-rng-sm",
			md: "moz-rng-md",
			lg: "moz-rng-lg",
			xl: "moz-rng-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface RangeProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof rangeVariants> {}

export const Range = forwardRef<HTMLInputElement, RangeProps>(
	({ className, color, size, ...props }, ref) => {
		return (
			<input
				type="range"
				className={cn(rangeVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Range.displayName = "Range";
