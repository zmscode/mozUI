import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";

const radioVariants = cva(
	[
		"relative inline-block shrink-0 cursor-pointer appearance-none rounded-full align-middle",
		"focus-visible:outline-2 focus-visible:outline focus-visible:outline-current",
		"disabled:cursor-not-allowed disabled:opacity-20",
		"[--moz-rdo-size:calc(var(--size-selector,0.25rem)*6)]",
		"[--moz-rdo-color:color-mix(in_srgb,currentColor_20%,#0000)]",
		"w-[var(--moz-rdo-size)] h-[var(--moz-rdo-size)]",
		"[border:var(--width-border)_solid_var(--moz-rdo-color)]",
		"[color:var(--moz-rdo-color)]",
		"shadow-[0_1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))_inset]",
		"before:block before:size-full before:rounded-full before:content-['']",
		"before:[background-size:auto,calc(var(--effect-noise)*100%)]",
		"before:[background-image:none,var(--effect-noise)]",
		"checked:border-current checked:bg-base-100",
		"checked:before:bg-current",
		"checked:before:shadow-[0_-1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_8px_0_-4px_oklch(100%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))]",
		"checked:[@media(prefers-reduced-motion:no-preference)]:animate-[radio_0.2s_ease-out]",
		"checked:[@media(forced-colors:active)]:before:outline checked:[@media(forced-colors:active)]:before:-outline-offset-1",
		"[@media_print]:checked:before:[outline:0.25rem_solid] [@media_print]:checked:before:[outline-offset:-1rem]",
	],
	{
		variants: {
			color: {
				default: "",
				primary: "[--moz-rdo-color:var(--color-primary)] text-primary",
				secondary:
					"[--moz-rdo-color:var(--color-secondary)] text-secondary",
				accent: "[--moz-rdo-color:var(--color-accent)] text-accent",
				neutral: "[--moz-rdo-color:var(--color-neutral)] text-neutral",
				info: "[--moz-rdo-color:var(--color-info)] text-info",
				success: "[--moz-rdo-color:var(--color-success)] text-success",
				warning: "[--moz-rdo-color:var(--color-warning)] text-warning",
				error: "[--moz-rdo-color:var(--color-error)] text-error",
			},
			size: {
				xs: "p-[0.125rem] [--moz-rdo-size:calc(var(--size-selector,0.25rem)*4)]",
				sm: "p-[0.1875rem] [--moz-rdo-size:calc(var(--size-selector,0.25rem)*5)]",
				md: "p-1 [--moz-rdo-size:calc(var(--size-selector,0.25rem)*6)]",
				lg: "p-[0.3125rem] [--moz-rdo-size:calc(var(--size-selector,0.25rem)*7)]",
				xl: "p-[0.375rem] [--moz-rdo-size:calc(var(--size-selector,0.25rem)*8)]",
			},
		},
		defaultVariants: {
			color: "default",
			size: "md",
		},
	}
);

export interface RadioProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof radioVariants> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ className, color, size, id, ...props }, ref) => {
		return (
			<input
				type="radio"
				className={cn(radioVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Radio.displayName = "Radio";
