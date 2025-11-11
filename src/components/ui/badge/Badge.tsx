import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import "./Badge.css";
import { forwardRef, type HTMLAttributes } from "react";

const badgeVariants = cva("moz-bdg", {
	variants: {
		style: {
			outline: "moz-bdg-outline",
			dash: "moz-bdg-dash",
			soft: "moz-bdg-soft",
			ghost: "moz-bdg-ghost",
		},
		color: {
			primary: "moz-bdg-primary",
			secondary: "moz-bdg-secondary",
			accent: "moz-bdg-accent",
			neutral: "moz-bdg-neutral",
			info: "moz-bdg-info",
			success: "moz-bdg-success",
			warning: "moz-bdg-warning",
			error: "moz-bdg-error",
		},
		size: {
			xs: "moz-bdg-xs",
			sm: "moz-bdg-sm",
			md: "moz-bdg-md",
			lg: "moz-bdg-lg",
			xl: "moz-bdg-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface BadgeProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "color" | "style">,
		VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ className, style, color, size, ...props }, ref) => {
		return (
			<div
				className={cn(badgeVariants({ style, color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Badge.displayName = "Badge";
