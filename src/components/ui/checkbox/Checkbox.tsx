import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";
import "./Checkbox.css";

const checkboxVariants = cva("moz-ckb", {
	variants: {
		color: {
			primary: "moz-ckb-primary",
			secondary: "moz-ckb-secondary",
			accent: "moz-ckb-accent",
			neutral: "moz-ckb-neutral",
			info: "moz-ckb-info",
			success: "moz-ckb-success",
			warning: "moz-ckb-warning",
			error: "moz-ckb-error",
		},
		size: {
			xs: "moz-ckb-xs",
			sm: "moz-ckb-sm",
			md: "moz-ckb-md",
			lg: "moz-ckb-lg",
			xl: "moz-ckb-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof checkboxVariants> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, color, size, ...props }, ref) => {
		const checkbox = (
			<input
				type="checkbox"
				className={cn(checkboxVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);

		return checkbox;
	}
);

Checkbox.displayName = "Checkbox";
