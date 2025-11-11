import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const fileInputVariants = cva("file-input", {
	variants: {
		style: {
			ghost: "file-input-ghost",
		},
		color: {
			neutral: "file-input-neutral",
			primary: "file-input-primary",
			secondary: "file-input-secondary",
			accent: "file-input-accent",
			info: "file-input-info",
			success: "file-input-success",
			warning: "file-input-warning",
			error: "file-input-error",
		},
		size: {
			xs: "file-input-xs",
			sm: "file-input-sm",
			default: "file-input-md",
			lg: "file-input-lg",
			xl: "file-input-xl",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export interface FileInputProps
	extends Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			"color" | "size" | "style"
		>,
		VariantProps<typeof fileInputVariants> {}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
	({ className, style, color, size, ...props }, ref) => {
		return (
			<input
				type="file"
				className={cn(fileInputVariants({ style, color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

FileInput.displayName = "FileInput";

export { FileInput, fileInputVariants };
