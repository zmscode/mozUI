import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import "./Button.css";

const buttonVariants = cva("moz-btn", {
	variants: {
		color: {
			primary: "moz-btn-primary",
			secondary: "moz-btn-secondary",
			accent: "moz-btn-accent",
			neutral: "moz-btn-neutral",
			info: "moz-btn-info",
			success: "moz-btn-success",
			warning: "moz-btn-warning",
			error: "moz-btn-error",
		},
		style: {
			ghost: "moz-btn-ghost",
			outline: "moz-btn-outline",
			link: "moz-btn-link",
			dash: "moz-btn-dash",
			soft: "moz-btn-soft",
		},
		size: {
			xs: "moz-btn-xs",
			sm: "moz-btn-sm",
			md: "moz-btn-md",
			lg: "moz-btn-lg",
			xl: "moz-btn-xl",
		},
		shape: {
			circle: "moz-btn-circle",
			square: "moz-btn-square",
		},
		width: {
			wide: "moz-btn-wide",
			block: "moz-btn-block",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "style">,
		VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, color, style, size, shape, width, ...props }, ref) => {
		return (
			<button
				className={cn(
					buttonVariants({
						color,
						style,
						size,
						shape,
						width,
						className,
					})
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = "Button";
