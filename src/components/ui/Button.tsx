import { type ButtonHTMLAttributes, forwardRef, Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { Icon } from "../utility/Icon";

const buttonVariants = cva(
	[
		"inline-flex shrink-0 cursor-pointer flex-nowrap items-center justify-center select-none",
		"gap-1.5 text-center align-middle outline-offset-2 font-semibold",
		"transition-[color,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0,0,0.2,1)]",
		"touch-action-manipulation",
		"bg-[var(--btn-color,var(--color-base-200))] text-[var(--btn-fg,var(--color-base-content))]",
		"border border-solid border-[color-mix(in_oklab,var(--btn-color,var(--color-base-200)),black_calc(var(--effect-depth)*5%))]",
		"shadow-[0_0.5px_0_0.5px_oklch(100%_0_0_/_calc(var(--effect-depth)*6%))_inset,0_3px_2px_-2px_color-mix(in_oklab,var(--btn-color,var(--color-base-200))_calc(var(--effect-depth)*30%),transparent),0_4px_3px_-2px_color-mix(in_oklab,var(--btn-color,var(--color-base-200))_calc(var(--effect-depth)*30%),transparent)]",
		"hover:bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-200)),black_7%)]",
		"active:translate-y-[0.5px] active:bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-200)),black_5%)] active:shadow-none",
		"focus-visible:outline-2 focus-visible:outline focus-visible:outline-[var(--btn-color,var(--color-base-content))] focus-visible:isolate",
		"disabled:pointer-events-none disabled:bg-base-content/10 disabled:text-[color-mix(in_oklch,var(--color-base-content)_20%,transparent)] disabled:border-transparent disabled:shadow-none",
	],
	{
		variants: {
			color: {
				default:
					"[--btn-color:var(--color-base-200)] [--btn-fg:var(--color-base-content)]",
				primary:
					"[--btn-color:var(--color-primary)] [--btn-fg:var(--color-primary-content)]",
				secondary:
					"[--btn-color:var(--color-secondary)] [--btn-fg:var(--color-secondary-content)]",
				accent: "[--btn-color:var(--color-accent)] [--btn-fg:var(--color-accent-content)]",
				neutral:
					"[--btn-color:var(--color-neutral)] [--btn-fg:var(--color-neutral-content)]",
				info: "[--btn-color:var(--color-info)] [--btn-fg:var(--color-info-content)]",
				success:
					"[--btn-color:var(--color-success)] [--btn-fg:var(--color-success-content)]",
				warning:
					"[--btn-color:var(--color-warning)] [--btn-fg:var(--color-warning-content)]",
				error: "[--btn-color:var(--color-error)] [--btn-fg:var(--color-error-content)]",
			},
			variant: {
				solid: "",
				ghost: [
					"bg-transparent border-transparent shadow-none",
					"text-[var(--btn-color,currentColor)]",
					"hover:bg-[var(--btn-color,var(--color-base-200))]/10",
					"outline-current",
					"disabled:bg-transparent",
				],
				outline: [
					"bg-transparent shadow-none text-[var(--btn-color)]",
					"border-[var(--btn-color)]",
					"hover:bg-[color-mix(in_oklab,var(--btn-color)_10%,transparent)]",
					"disabled:bg-transparent",
				],
				dash: [
					"bg-transparent shadow-none text-[var(--btn-color)]",
					"border-[var(--btn-color)] border-dashed",
					"hover:bg-[color-mix(in_oklab,var(--btn-color)_10%,transparent)]",
					"disabled:bg-transparent",
				],
				link: [
					"bg-transparent border-transparent shadow-none",
					"text-[var(--btn-color,var(--color-primary))] underline underline-offset-4",
					"outline-current",
					"hover:underline hover:text-[var(--btn-color,var(--color-primary))]",
					"disabled:bg-transparent",
				],
				soft: [
					"shadow-none",
					"text-[var(--btn-color,var(--color-base-content))]",
					"bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-content))_8%,var(--color-base-100))]",
					"border-[color-mix(in_oklab,var(--btn-color,var(--color-base-content))_10%,var(--color-base-100))]",
					"hover:bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-content))_12%,var(--color-base-100))]",
					"disabled:bg-base-content/10",
				],
			},
			size: {
				xs: "h-[calc(var(--size-field,0.25rem)*6)] px-2 text-[0.6875rem] rounded-[var(--radius-field)]",
				sm: "h-[calc(var(--size-field,0.25rem)*8)] px-3 text-[0.75rem] rounded-[var(--radius-field)]",
				md: "h-[calc(var(--size-field,0.25rem)*10)] px-4 text-[0.875rem] rounded-[var(--radius-field)]",
				lg: "h-[calc(var(--size-field,0.25rem)*12)] px-5 text-[1.125rem] rounded-[var(--radius-field)]",
				xl: "h-[calc(var(--size-field,0.25rem)*14)] px-6 text-[1.375rem] rounded-[var(--radius-field)]",
			},
			shape: {
				default: "",
				circle: "rounded-full aspect-square p-0",
				square: "aspect-square p-0",
			},
			width: {
				default: "",
				wide: "w-full max-w-64",
				block: "w-full",
			},
		},
		defaultVariants: {
			color: "default",
			variant: "solid",
			size: "md",
			shape: "default",
			width: "default",
		},
	}
);

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		VariantProps<typeof buttonVariants> {
	icon?: string;
	iconEnd?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			color,
			variant,
			size,
			shape,
			width,
			icon,
			iconEnd,
			children,
			...props
		},
		ref
	) => {
		const hasTextContent =
			children &&
			(typeof children === "string" ||
				typeof children === "number" ||
				(Children.count(children) > 0 &&
					Children.toArray(children).some(
						(child) =>
							typeof child === "string" ||
							typeof child === "number"
					)));

		const effectiveShape =
			shape || (!hasTextContent && (icon || iconEnd))
				? "circle"
				: "default";

		const iconSize = {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 20,
			xl: 24,
		}[size || "md"];

		return (
			<button
				className={cn(
					buttonVariants({
						color,
						variant,
						size,
						shape: effectiveShape,
						width,
						className,
					})
				)}
				ref={ref}
				{...props}
			>
				{icon && <Icon icon={icon} size={iconSize} />}
				{children}
				{iconEnd && <Icon icon={iconEnd} size={iconSize} />}
			</button>
		);
	}
);

Button.displayName = "Button";
