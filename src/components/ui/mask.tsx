import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const maskVariants = cva("mask", {
	variants: {
		shape: {
			squircle: "mask-squircle",
			heart: "mask-heart",
			hexagon: "mask-hexagon",
			hexagon2: "mask-hexagon-2",
			decagon: "mask-decagon",
			pentagon: "mask-pentagon",
			diamond: "mask-diamond",
			square: "mask-square",
			circle: "mask-circle",
			star: "mask-star",
			star2: "mask-star-2",
			triangle: "mask-triangle",
			triangle2: "mask-triangle-2",
			triangle3: "mask-triangle-3",
			triangle4: "mask-triangle-4",
		},
		half: {
			1: "mask-half-1",
			2: "mask-half-2",
		},
	},
});

export interface MaskProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		VariantProps<typeof maskVariants> {}

const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
	({ className, shape, half, ...props }, ref) => {
		return (
			// biome-ignore lint/a11y/useAltText: <explanation>
			<img
				className={cn(maskVariants({ shape, half, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Mask.displayName = "Mask";

export { Mask, maskVariants };
