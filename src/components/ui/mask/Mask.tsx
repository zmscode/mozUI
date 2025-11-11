import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Mask.css";

const maskVariants = cva("moz-msk", {
	variants: {
		shape: {
			squircle: "moz-msk-squircle",
			heart: "moz-msk-heart",
			hexagon: "moz-msk-hexagon",
			hexagon2: "moz-msk-hexagon-2",
			decagon: "moz-msk-decagon",
			pentagon: "moz-msk-pentagon",
			diamond: "moz-msk-diamond",
			square: "moz-msk-square",
			circle: "moz-msk-circle",
			star: "moz-msk-star",
			star2: "moz-msk-star-2",
			triangle: "moz-msk-triangle",
			triangle2: "moz-msk-triangle-2",
			triangle3: "moz-msk-triangle-3",
			triangle4: "moz-msk-triangle-4",
		},
		half: {
			1: "moz-msk-half-1",
			2: "moz-msk-half-2",
		},
	},
});

export interface MaskProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof maskVariants> {}

export const Mask = forwardRef<HTMLDivElement, MaskProps>(
	({ className, shape, half, children, ...props }, ref) => {
		return (
			<div
				className={cn(maskVariants({ shape, half, className }))}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		);
	}
);

Mask.displayName = "Mask";
