import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import "./Toggle.css";
import { forwardRef, type InputHTMLAttributes } from "react";

const toggleVariants = cva("moz-tgl", {
	variants: {
		color: {
			primary: "moz-tgl-primary",
			secondary: "moz-tgl-secondary",
			accent: "moz-tgl-accent",
			neutral: "moz-tgl-neutral",
			info: "moz-tgl-info",
			success: "moz-tgl-success",
			warning: "moz-tgl-warning",
			error: "moz-tgl-error",
		},
		size: {
			xs: "moz-tgl-xs",
			sm: "moz-tgl-sm",
			md: "moz-tgl-md",
			lg: "moz-tgl-lg",
			xl: "moz-tgl-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface ToggleProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof toggleVariants> {}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
	({ className, color, size, ...props }, ref) => {
		return (
			<input
				type="checkbox"
				className={cn(toggleVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Toggle.displayName = "Toggle";
