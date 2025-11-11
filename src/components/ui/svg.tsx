import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const svgVariants = cva("", {
	variants: {
		size: {
			xs: "w-3 h-3",
			sm: "w-4 h-4",
			md: "w-6 h-6",
			lg: "w-8 h-8",
			xl: "w-12 h-12",
			"2xl": "w-16 h-16",
		},
		svgFill: {
			current: "fill-current",
			none: "fill-none",
		},
		svgStroke: {
			current: "stroke-current",
			none: "stroke-none",
		},
	},
});

export interface SVGProps
	extends React.SVGAttributes<SVGSVGElement>,
		VariantProps<typeof svgVariants> {}

const SVG = React.forwardRef<SVGSVGElement, SVGProps>(
	({ className, size, svgFill, svgStroke, ...props }, ref) => {
		return (
			<svg
				className={cn(svgVariants({ size, svgFill, svgStroke, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

SVG.displayName = "SVG";

export { SVG, svgVariants };
