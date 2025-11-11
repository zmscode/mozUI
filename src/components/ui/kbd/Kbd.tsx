import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Kbd.css";

const kbdVariants = cva("moz-kbd", {
	variants: {
		size: {
			xs: "moz-kbd-xs",
			sm: "moz-kbd-sm",
			md: "moz-kbd-md",
			lg: "moz-kbd-lg",
			xl: "moz-kbd-xl",
		},
		color: {
			primary: "moz-kbd-primary",
			secondary: "moz-kbd-secondary",
			accent: "moz-kbd-accent",
			neutral: "moz-kbd-neutral",
			success: "moz-kbd-success",
			warning: "moz-kbd-warning",
			info: "moz-kbd-info",
			error: "moz-kbd-error",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface KbdProps
	extends Omit<HTMLAttributes<HTMLElement>, "color">,
		VariantProps<typeof kbdVariants> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
	({ className, size, color, ...props }, ref) => {
		return (
			<kbd
				className={cn(kbdVariants({ size, color, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Kbd.displayName = "Kbd";
