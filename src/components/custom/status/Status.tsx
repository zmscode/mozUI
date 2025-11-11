import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Status.css";

const statusVariants = cva("moz-sts", {
	variants: {
		color: {
			primary: "moz-sts-primary",
			secondary: "moz-sts-secondary",
			accent: "moz-sts-accent",
			neutral: "moz-sts-neutral",
			info: "moz-sts-info",
			success: "moz-sts-success",
			warning: "moz-sts-warning",
			error: "moz-sts-error",
		},
		size: {
			xs: "moz-sts-xs",
			sm: "moz-sts-sm",
			md: "moz-sts-md",
			lg: "moz-sts-lg",
			xl: "moz-sts-xl",
		},
		animate: {
			true: "animate-ping",
			false: "",
		},
	},
	defaultVariants: {
		size: "md",
		animate: false,
	},
});

export interface StatusProps
	extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
		VariantProps<typeof statusVariants> {}

export const Status = forwardRef<HTMLSpanElement, StatusProps>(
	({ className, color, size, animate, ...props }, ref) => {
		if (animate) {
			return (
				<span className="inline-grid *:[grid-area:1/1]">
					<span
						className={cn(
							statusVariants({ color, size, className }),
							"animate-ping"
						)}
						{...props}
					/>
					<span
						className={cn(
							statusVariants({ color, size, className })
						)}
						ref={ref}
						{...props}
					/>
				</span>
			);
		}
		return (
			<span
				className={cn(statusVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Status.displayName = "Status";
