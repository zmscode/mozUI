import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";
import "./Radio.css";

const radioVariants = cva("moz-rdo", {
	variants: {
		color: {
			primary: "moz-rdo-primary",
			secondary: "moz-rdo-secondary",
			accent: "moz-rdo-accent",
			neutral: "moz-rdo-neutral",
			info: "moz-rdo-info",
			success: "moz-rdo-success",
			warning: "moz-rdo-warning",
			error: "moz-rdo-error",
		},
		size: {
			xs: "moz-rdo-xs",
			sm: "moz-rdo-sm",
			md: "moz-rdo-md",
			lg: "moz-rdo-lg",
			xl: "moz-rdo-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface RadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof radioVariants> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ className, color, size, id, ...props }, ref) => {
		return (
			<input
				type="radio"
				className={cn(radioVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Radio.displayName = "Radio";
