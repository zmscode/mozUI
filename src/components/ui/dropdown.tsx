import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const dropdownVariants = cva("dropdown", {
	variants: {
		horizontal: {
			start: "dropdown-start",
			center: "dropdown-center",
			end: "dropdown-end",
		},
		vertical: {
			top: "dropdown-top",
			bottom: "dropdown-bottom",
			left: "dropdown-left",
			right: "dropdown-right",
		},
		modifier: {
			hover: "dropdown-hover",
			open: "dropdown-open",
		},
	},
	defaultVariants: {
		horizontal: "start",
		vertical: "bottom",
	},
});

const dropdownContentVariants = cva(
	"dropdown-content menu bg-base-200 rounded-box z-[1] shadow w-max"
);

export interface DropdownProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof dropdownVariants> {}

export interface DropdownContentProps
	extends React.HTMLAttributes<HTMLUListElement> {}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
	({ className, horizontal, vertical, modifier, ...props }, ref) => {
		return (
			<div
				className={cn(
					dropdownVariants({ horizontal, vertical, modifier, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

const DropdownContent = React.forwardRef<HTMLUListElement, DropdownContentProps>(
	({ className, ...props }, ref) => {
		return (
			<ul
				className={cn(dropdownContentVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Dropdown.displayName = "Dropdown";
DropdownContent.displayName = "DropdownContent";

export { Dropdown, DropdownContent, dropdownVariants, dropdownContentVariants };
