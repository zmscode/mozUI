import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import "./Indicator.css";
import { forwardRef, type HTMLAttributes } from "react";

const indicatorVariants = cva("moz-ind");

const indicatorItemVariants = cva("moz-ind-item", {
	variants: {
		horizontal: {
			start: "moz-ind-start",
			center: "moz-ind-center",
			end: "moz-ind-end",
		},
		vertical: {
			top: "moz-ind-top",
			middle: "moz-ind-middle",
			bottom: "moz-ind-bottom",
		},
	},
	defaultVariants: {
		horizontal: "end",
		vertical: "top",
	},
});

export interface IndicatorProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof indicatorVariants> {}

export interface IndicatorItemProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof indicatorItemVariants> {}

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(indicatorVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const IndicatorItem = forwardRef<HTMLSpanElement, IndicatorItemProps>(
	({ className, horizontal, vertical, ...props }, ref) => {
		return (
			<span
				className={cn(
					indicatorItemVariants({ horizontal, vertical, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Indicator.displayName = "Indicator";
IndicatorItem.displayName = "IndicatorItem";
