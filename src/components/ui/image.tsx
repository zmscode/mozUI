import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const imageVariants = cva("", {
	variants: {
		fit: {
			contain: "object-contain",
			cover: "object-cover",
			fill: "object-fill",
			none: "object-none",
			scaleDown: "object-scale-down",
		},
		position: {
			center: "object-center",
			top: "object-top",
			bottom: "object-bottom",
			left: "object-left",
			right: "object-right",
			leftTop: "object-left-top",
			leftBottom: "object-left-bottom",
			rightTop: "object-right-top",
			rightBottom: "object-right-bottom",
		},
		rounded: {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			full: "rounded-full",
		},
	},
});

export interface ImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		VariantProps<typeof imageVariants> {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ className, fit, position, rounded, ...props }, ref) => {
		return (
			<img
				className={cn(imageVariants({ fit, position, rounded, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Image.displayName = "Image";

export { Image, imageVariants };
