import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";

const rangeVariants = cva(
	[
		"cursor-pointer overflow-hidden bg-transparent align-middle appearance-none",
		"focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2",
		"disabled:cursor-not-allowed disabled:opacity-30",
		"[--rng-thumb:var(--color-base-100)]",
		"[--rng-thumb-size:calc(var(--size-selector,0.25rem)*6)]",
		"[--rng-progress:currentColor]",
		"[--rng-fill:1]",
		"[--rng-p:0.25rem]",
		"[--rng-bg:color-mix(in_oklab,currentColor_10%,#0000)]",
		"[--rng-radius-max:calc(var(--radius-selector)+var(--radius-selector)+var(--radius-selector))]",
		"w-full min-w-[3rem] max-w-[20rem]",
		"h-[var(--rng-thumb-size)]",
		"border-none",
		"rounded-[calc(var(--radius-selector)+min(var(--rng-p),var(--rng-radius-max)))]",
		"[dir=rtl]:[--rng-dir:-1]",
		"[&::-webkit-slider-runnable-track]:w-full",
		"[&::-webkit-slider-runnable-track]:h-[calc(var(--rng-thumb-size)*0.5)]",
		"[&::-webkit-slider-runnable-track]:bg-[var(--rng-bg)]",
		"[&::-webkit-slider-runnable-track]:rounded-[var(--radius-selector)]",
		"[&::-webkit-slider-thumb]:appearance-none",
		"[&::-webkit-slider-thumb]:[-webkit-appearance:none]",
		"[&::-webkit-slider-thumb]:relative",
		"[&::-webkit-slider-thumb]:box-border",
		"[&::-webkit-slider-thumb]:h-[var(--rng-thumb-size)]",
		"[&::-webkit-slider-thumb]:w-[var(--rng-thumb-size)]",
		"[&::-webkit-slider-thumb]:bg-[var(--rng-thumb)]",
		"[&::-webkit-slider-thumb]:[border:var(--rng-p)_solid]",
		"[&::-webkit-slider-thumb]:rounded-[calc(var(--radius-selector)+min(var(--rng-p),var(--rng-radius-max)))]",
		"[&::-webkit-slider-thumb]:[top:50%]",
		"[&::-webkit-slider-thumb]:[transform:translateY(-50%)]",
		"[&::-webkit-slider-thumb]:text-[var(--rng-progress)]",
		"[&::-webkit-slider-thumb]:shadow-[0_-1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_8px_0_-4px_oklch(100%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_1px_color-mix(in_oklab,currentColor_calc(var(--effect-depth)*10%),#0000),0_0_0_2rem_var(--rng-thumb)_inset,calc((var(--rng-dir,1)*-100rem)-(var(--rng-dir,1)*var(--rng-thumb-size)/2))_0_0_calc(100rem*var(--rng-fill))]",
		"[&::-moz-range-track]:w-full",
		"[&::-moz-range-track]:h-[calc(var(--rng-thumb-size)*0.5)]",
		"[&::-moz-range-track]:bg-[var(--rng-bg)]",
		"[&::-moz-range-track]:rounded-[var(--radius-selector)]",
		"[&::-moz-range-thumb]:relative",
		"[&::-moz-range-thumb]:box-border",
		"[&::-moz-range-thumb]:h-[var(--rng-thumb-size)]",
		"[&::-moz-range-thumb]:w-[var(--rng-thumb-size)]",
		"[&::-moz-range-thumb]:bg-[currentColor]",
		"[&::-moz-range-thumb]:[border:var(--rng-p)_solid]",
		"[&::-moz-range-thumb]:rounded-[calc(var(--radius-selector)+min(var(--rng-p),var(--rng-radius-max)))]",
		"[&::-moz-range-thumb]:[top:50%]",
		"[&::-moz-range-thumb]:text-[var(--rng-progress)]",
		"[&::-moz-range-thumb]:shadow-[0_-1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_8px_0_-4px_oklch(100%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_1px_color-mix(in_oklab,currentColor_calc(var(--effect-depth)*10%),#0000),0_0_0_2rem_var(--rng-thumb)_inset,calc((var(--rng-dir,1)*-100rem)-(var(--rng-dir,1)*var(--rng-thumb-size)/2))_0_0_calc(100rem*var(--rng-fill))]",
	],
	{
		variants: {
			color: {
				default: "text-base-content",
				primary:
					"text-primary [--rng-thumb:var(--color-primary-content)]",
				secondary:
					"text-secondary [--rng-thumb:var(--color-secondary-content)]",
				accent: "text-accent [--rng-thumb:var(--color-accent-content)]",
				neutral:
					"text-neutral [--rng-thumb:var(--color-neutral-content)]",
				info: "text-info [--rng-thumb:var(--color-info-content)]",
				success:
					"text-success [--rng-thumb:var(--color-success-content)]",
				warning:
					"text-warning [--rng-thumb:var(--color-warning-content)]",
				error: "text-error [--rng-thumb:var(--color-error-content)]",
			},
			size: {
				xs: "[--rng-thumb-size:calc(var(--size-selector,0.25rem)*4)]",
				sm: "[--rng-thumb-size:calc(var(--size-selector,0.25rem)*5)]",
				md: "[--rng-thumb-size:calc(var(--size-selector,0.25rem)*6)]",
				lg: "[--rng-thumb-size:calc(var(--size-selector,0.25rem)*7)]",
				xl: "[--rng-thumb-size:calc(var(--size-selector,0.25rem)*8)]",
			},
		},
		defaultVariants: {
			color: "default",
			size: "md",
		},
	}
);

export interface RangeProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof rangeVariants> {}

export const Range = forwardRef<HTMLInputElement, RangeProps>(
	({ className, color, size, ...props }, ref) => {
		return (
			<input
				type="range"
				className={cn(rangeVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Range.displayName = "Range";
