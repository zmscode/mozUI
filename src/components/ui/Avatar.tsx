import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

const DefaultUserIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		fill="currentColor"
		viewBox="0 0 256 256"
		aria-label="User icon"
	>
		<title>User icon</title>
		<path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
	</svg>
);

const avatarVariants = cva(
	[
		"relative inline-flex align-middle",
		"[&>div]:block [&>div]:aspect-square [&>div]:overflow-hidden",
		"[&_img]:h-full [&_img]:w-full [&_img]:object-cover",
	],
	{
		variants: {
			presence: {
				online: "before:content-[''] before:absolute before:z-[1] before:block before:rounded-full before:bg-success before:[outline:2px_solid_var(--color-base-100)] before:w-[15%] before:h-[15%] before:top-[7%] before:right-[7%]",
				offline:
					"before:content-[''] before:absolute before:z-[1] before:block before:rounded-full before:bg-neutral before:[outline:2px_solid_var(--color-base-100)] before:w-[15%] before:h-[15%] before:top-[7%] before:right-[7%]",
				away: "before:content-[''] before:absolute before:z-[1] before:block before:rounded-full before:bg-warning before:[outline:2px_solid_var(--color-base-100)] before:w-[15%] before:h-[15%] before:top-[7%] before:right-[7%]",
				busy: "before:content-[''] before:absolute before:z-[1] before:block before:rounded-full before:bg-error before:[outline:2px_solid_var(--color-base-100)] before:w-[15%] before:h-[15%] before:top-[7%] before:right-[7%]",
			},
			placeholder: {
				true: "[&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:bg-neutral [&>div]:text-neutral-content [&>div]:font-semibold [&>div]:text-sm",
				false: "",
			},
			ring: {
				default: "[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-base-content [&>div]:ring-offset-base-100",
				primary: "[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-primary [&>div]:ring-offset-base-100",
				secondary:
					"[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-secondary [&>div]:ring-offset-base-100",
				accent: "[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-accent [&>div]:ring-offset-base-100",
				neutral:
					"[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-neutral [&>div]:ring-offset-base-100",
				info: "[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-info [&>div]:ring-offset-base-100",
				success:
					"[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-success [&>div]:ring-offset-base-100",
				warning:
					"[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-warning [&>div]:ring-offset-base-100",
				error: "[&>div]:ring-2 [&>div]:ring-offset-2 [&>div]:ring-error [&>div]:ring-offset-base-100",
			},
			size: {
				xs: "w-6 h-6 [&_svg]:w-4 [&_svg]:h-4",
				sm: "w-8 h-8 [&_svg]:w-5 [&_svg]:h-5",
				md: "w-10 h-10 [&_svg]:w-6 [&_svg]:h-6",
				lg: "w-12 h-12 [&_svg]:w-8 [&_svg]:h-8",
				xl: "w-16 h-16 [&_svg]:w-10 [&_svg]:h-10",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);

const avatarGroupVariants = cva(
	[
		"flex rtl:space-x-reverse",
		"[&_.moz-ava]:overflow-hidden [&_.moz-ava]:rounded-full [&_.moz-ava]:[outline:4px_solid_var(--color-base-100)]",
		"[&_.moz-ava]:before:hidden",
	],
	{
		variants: {
			size: {
				xs: "-space-x-1.5",
				sm: "-space-x-2",
				md: "-space-x-2.5",
				lg: "-space-x-3",
				xl: "-space-x-4",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);

export interface AvatarProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
		VariantProps<typeof avatarVariants> {
	src?: string;
	alt?: string;
	fallback?: ReactNode;
}

export interface AvatarGroupProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarGroupVariants> {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			className,
			presence,
			placeholder,
			ring,
			size,
			src,
			alt,
			fallback,
			...props
		},
		ref
	) => {
		const content = src ? (
			<img src={src} alt={alt || "Avatar"} />
		) : fallback !== undefined ? (
			fallback
		) : (
			<DefaultUserIcon />
		);

		return (
			<div
				className={cn(
					"moz-ava",
					avatarVariants({
						presence,
						placeholder: placeholder ?? !src,
						ring,
						size,
						className,
					})
				)}
				ref={ref}
				{...props}
			>
				<div className="rounded-full">{content}</div>
			</div>
		);
	}
);

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
	({ className, size, ...props }, ref) => {
		return (
			<div
				className={cn(avatarGroupVariants({ size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Avatar.displayName = "Avatar";
AvatarGroup.displayName = "AvatarGroup";
