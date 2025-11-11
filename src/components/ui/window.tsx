import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const windowVariants = cva("mockup-window");

export interface WindowProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof windowVariants> {}

const Window = React.forwardRef<HTMLDivElement, WindowProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(windowVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Window.displayName = "Window";

export { Window, windowVariants };
