import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import { Icon } from "../utility/Icon";

const badgeVariants = cva(
	[
		// Base styles
		"inline-flex items-center justify-center gap-2 align-middle w-fit",
		"border border-solid rounded-[var(--radius-selector)]",
		// Default solid badge styling
		"bg-[var(--bdg-color,var(--color-base-100))] text-[var(--bdg-fg,var(--color-base-content))]",
		"border-[var(--bdg-color,var(--color-base-200))]",
	],
	{
		variants: {
			color: {
				default:
					"[--bdg-color:var(--color-base-200)] [--bdg-fg:var(--color-base-content)]",
				primary:
					"[--bdg-color:var(--color-primary)] [--bdg-fg:var(--color-primary-content)]",
				secondary:
					"[--bdg-color:var(--color-secondary)] [--bdg-fg:var(--color-secondary-content)]",
				accent: "[--bdg-color:var(--color-accent)] [--bdg-fg:var(--color-accent-content)]",
				neutral:
					"[--bdg-color:var(--color-neutral)] [--bdg-fg:var(--color-neutral-content)]",
				info: "[--bdg-color:var(--color-info)] [--bdg-fg:var(--color-info-content)]",
				success:
					"[--bdg-color:var(--color-success)] [--bdg-fg:var(--color-success-content)]",
				warning:
					"[--bdg-color:var(--color-warning)] [--bdg-fg:var(--color-warning-content)]",
				error: "[--bdg-color:var(--color-error)] [--bdg-fg:var(--color-error-content)]",
			},
			variant: {
				solid: "",
				outline: [
					"bg-transparent text-[var(--bdg-color)]",
					"border-current",
				],
				dash: [
					"bg-transparent text-[var(--bdg-color)]",
					"border-current border-dashed",
				],
				soft: [
					"text-[var(--bdg-color,var(--color-base-content))]",
					"bg-[color-mix(in_oklab,var(--bdg-color,var(--color-base-content))_8%,var(--color-base-100))]",
					"border-[color-mix(in_oklab,var(--bdg-color,var(--color-base-content))_10%,var(--color-base-100))]",
				],
				ghost: ["bg-base-200 text-base-content", "border-base-200"],
			},
			size: {
				xs: "h-[calc(var(--size-selector,0.25rem)*4)] px-[calc(0.25rem*2-var(--width-border))] text-[0.625rem]",
				sm: "h-[calc(var(--size-selector,0.25rem)*5)] px-[calc(0.25rem*2.5-var(--width-border))] text-[0.75rem]",
				md: "h-[calc(var(--size-selector,0.25rem)*6)] px-[calc(0.25rem*3-var(--width-border))] text-[0.875rem]",
				lg: "h-[calc(var(--size-selector,0.25rem)*7)] px-[calc(0.25rem*3.5-var(--width-border))] text-[1rem]",
				xl: "h-[calc(var(--size-selector,0.25rem)*8)] px-[calc(0.25rem*4-var(--width-border))] text-[1.125rem]",
			},
		},
		defaultVariants: {
			color: "default",
			variant: "solid",
			size: "md",
		},
	}
);

export interface BadgeProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		VariantProps<typeof badgeVariants> {
	/** Icon name to display before the badge text (kebab-case, e.g., "check", "star") */
	icon?: string;
	/** Icon name to display after the badge text (kebab-case, e.g., "x") */
	iconEnd?: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ className, variant, color, size, icon, iconEnd, children, ...props }, ref) => {
		// Determine icon size based on badge size
		const iconSize = {
			xs: 10,
			sm: 12,
			md: 14,
			lg: 16,
			xl: 18,
		}[size || "md"];

		return (
			<div
				className={cn(
					badgeVariants({ variant, color, size, className })
				)}
				ref={ref}
				{...props}
			>
				{icon && <Icon icon={icon} size={iconSize} />}
				{children}
				{iconEnd && <Icon icon={iconEnd} size={iconSize} />}
			</div>
		);
	}
);

Badge.displayName = "Badge";
