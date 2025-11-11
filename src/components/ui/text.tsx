import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const textVariants = cva("", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
			"6xl": "text-6xl",
		},
		weight: {
			thin: "font-thin",
			extralight: "font-extralight",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
			black: "font-black",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
		},
		transform: {
			uppercase: "uppercase",
			lowercase: "lowercase",
			capitalize: "capitalize",
			normalCase: "normal-case",
		},
		color: {
			primary: "text-primary",
			secondary: "text-secondary",
			accent: "text-accent",
			neutral: "text-neutral",
			info: "text-info",
			success: "text-success",
			warning: "text-warning",
			error: "text-error",
		},
	},
});

type BaseTextProps = Omit<React.HTMLAttributes<HTMLElement>, "color"> &
	VariantProps<typeof textVariants>;

export interface TextProps extends BaseTextProps {
	as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";
	htmlFor?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
	(
		{
			className,
			as: Component = "span",
			size,
			weight,
			align,
			transform,
			color,
			htmlFor,
			...props
		},
		ref
	) => {
		const classNames = cn(
			textVariants({
				size,
				weight,
				align,
				transform,
				color,
				className,
			})
		);

		if (Component === "label") {
			return (
				// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
				<label
					className={classNames}
					ref={ref as React.Ref<HTMLLabelElement>}
					htmlFor={htmlFor}
					{...props}
				/>
			);
		}

		if (Component === "p") {
			return (
				<p
					className={classNames}
					ref={ref as React.Ref<HTMLParagraphElement>}
					{...props}
				/>
			);
		}

		if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(Component)) {
			const HeadingComponent = Component as
				| "h1"
				| "h2"
				| "h3"
				| "h4"
				| "h5"
				| "h6";
			return (
				<HeadingComponent
					className={classNames}
					ref={ref as React.Ref<HTMLHeadingElement>}
					{...props}
				/>
			);
		}

		return (
			<span
				className={classNames}
				ref={ref as React.Ref<HTMLSpanElement>}
				{...props}
			/>
		);
	}
);

Text.displayName = "Text";

export { Text, textVariants };
