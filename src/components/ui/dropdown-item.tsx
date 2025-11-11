import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const dropdownItemVariants = cva("", {
	variants: {
		active: {
			true: "active",
		},
		disabled: {
			true: "disabled",
		},
	},
});

export interface DropdownItemProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof dropdownItemVariants> {}

const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
	({ className, active, disabled, ...props }, ref) => {
		return (
			<div
				className={cn(dropdownItemVariants({ active, disabled, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

DropdownItem.displayName = "DropdownItem";

export { DropdownItem, dropdownItemVariants };
