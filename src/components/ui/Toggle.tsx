import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { forwardRef, type InputHTMLAttributes } from "react";

const toggleVariants = cva(
	[
		"relative inline-grid shrink-0 cursor-pointer appearance-none place-content-center align-middle select-none",
		"[grid-template-columns:0fr_1fr_1fr]",
		"[--moz-tgl-padding:calc(var(--moz-tgl-size)*0.125)]",
		"[--moz-tgl-size:calc(var(--size-selector,0.25rem)*6)]",
		"[--moz-tgl-border:var(--width-border)]",
		"[--moz-tgl-color:color-mix(in_oklab,var(--color-base-content)_50%,#0000)]",
		"[--moz-tgl-radius-selector-max:calc(var(--radius-selector)+var(--radius-selector)+var(--radius-selector))]",
		"p-[var(--moz-tgl-padding)]",
		"[border:var(--moz-tgl-border)_solid_currentColor]",
		"w-[calc((var(--moz-tgl-size)*2)-(var(--moz-tgl-border)+var(--moz-tgl-padding))*2)]",
		"h-[var(--moz-tgl-size)]",
		"transition-[color_0.3s,grid-template-columns_0.2s]",
		"[color:var(--moz-tgl-color)]",
		"shadow-[0_1px_color-mix(in_oklab,currentColor_calc(var(--effect-depth)*10%),#0000)_inset]",
		"rounded-[calc(var(--radius-selector)+min(var(--moz-tgl-padding),var(--moz-tgl-radius-selector-max))+min(var(--moz-tgl-border),var(--moz-tgl-radius-selector-max)))]",
		"before:relative before:start-0 before:col-start-2 before:row-start-1 before:aspect-square before:h-full before:bg-current",
		"before:rounded-[var(--radius-selector)]",
		"before:[translate:0]",
		"before:content-['']",
		"before:transition-[background-color_0.1s,translate_0.2s,inset-inline-start_0.2s]",
		"before:shadow-[0_-1px_oklch(0%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_8px_0_-4px_oklch(100%_0_0_/_calc(var(--effect-depth)*0.1))_inset,0_1px_color-mix(in_oklab,currentColor_calc(var(--effect-depth)*10%),#0000)]",
		"before:[background-size:auto,calc(var(--effect-noise)*100%)]",
		"before:[background-image:none,var(--effect-noise)]",
		"[&>*]:z-[1] [&>*]:col-span-1 [&>*]:col-start-2 [&>*]:row-start-1 [&>*]:h-full [&>*]:cursor-pointer [&>*]:appearance-none [&>*]:bg-transparent [&>*]:p-0.5",
		"[&>*]:transition-[opacity_0.2s,rotate_0.4s]",
		"[&>*]:border-none",
		"[&>*:focus]:outline-hidden",
		"[&>*:nth-child(2)]:text-base-100 [&>*:nth-child(2)]:[rotate:0deg]",
		"[&>*:nth-child(3)]:opacity-0 [&>*:nth-child(3)]:text-base-100 [&>*:nth-child(3)]:[rotate:-15deg]",
		"has-[:checked]:[grid-template-columns:1fr_1fr_0fr]",
		"has-[:checked]:bg-base-100",
		"has-[:checked]:[--moz-tgl-color:var(--color-base-content)]",
		"has-[:checked]:before:bg-current",
		"has-[:checked]:[&>*:nth-child(2)]:opacity-0 has-[:checked]:[&>*:nth-child(2)]:[rotate:15deg]",
		"has-[:checked]:[&>*:nth-child(3)]:opacity-100 has-[:checked]:[&>*:nth-child(3)]:[rotate:0deg]",
		"checked:[grid-template-columns:1fr_1fr_0fr]",
		"checked:bg-base-100",
		"checked:[--moz-tgl-color:var(--color-base-content)]",
		"checked:before:bg-current",
		"indeterminate:[grid-template-columns:0.5fr_1fr_0.5fr]",
		"focus-visible:outline-2 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2",
		"has-[:focus-visible]:outline-2 has-[:focus-visible]:outline has-[:focus-visible]:outline-current has-[:focus-visible]:outline-offset-2",
		"disabled:cursor-not-allowed disabled:opacity-30",
		"disabled:before:bg-transparent disabled:before:[border:var(--moz-tgl-border)_solid_currentColor]",
		"[@media(forced-colors:active)]:before:outline [@media(forced-colors:active)]:before:-outline-offset-1",
		"[@media_print]:before:[outline:0.25rem_solid] [@media_print]:before:[outline-offset:-1rem]",
	],
	{
		variants: {
			color: {
				default: "",
				primary:
					"checked:[--moz-tgl-color:var(--color-primary)] has-[:checked]:[--moz-tgl-color:var(--color-primary)]",
				secondary:
					"checked:[--moz-tgl-color:var(--color-secondary)] has-[:checked]:[--moz-tgl-color:var(--color-secondary)]",
				accent: "checked:[--moz-tgl-color:var(--color-accent)] has-[:checked]:[--moz-tgl-color:var(--color-accent)]",
				neutral:
					"checked:[--moz-tgl-color:var(--color-neutral)] has-[:checked]:[--moz-tgl-color:var(--color-neutral)]",
				info: "checked:[--moz-tgl-color:var(--color-info)] has-[:checked]:[--moz-tgl-color:var(--color-info)]",
				success:
					"checked:[--moz-tgl-color:var(--color-success)] has-[:checked]:[--moz-tgl-color:var(--color-success)]",
				warning:
					"checked:[--moz-tgl-color:var(--color-warning)] has-[:checked]:[--moz-tgl-color:var(--color-warning)]",
				error: "checked:[--moz-tgl-color:var(--color-error)] has-[:checked]:[--moz-tgl-color:var(--color-error)]",
			},
			size: {
				xs: "[--moz-tgl-size:calc(var(--size-selector,0.25rem)*4)]",
				sm: "[--moz-tgl-size:calc(var(--size-selector,0.25rem)*5)]",
				md: "[--moz-tgl-size:calc(var(--size-selector,0.25rem)*6)]",
				lg: "[--moz-tgl-size:calc(var(--size-selector,0.25rem)*7)]",
				xl: "[--moz-tgl-size:calc(var(--size-selector,0.25rem)*8)]",
			},
		},
		defaultVariants: {
			color: "default",
			size: "md",
		},
	}
);

export interface ToggleProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
		VariantProps<typeof toggleVariants> {}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
	({ className, color, size, ...props }, ref) => {
		return (
			<input
				type="checkbox"
				className={cn(toggleVariants({ color, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Toggle.displayName = "Toggle";
