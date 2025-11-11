import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./Avatar.css";

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

const avatarVariants = cva("moz-ava", {
	variants: {
		presence: {
			online: "moz-ava-online",
			offline: "moz-ava-offline",
			away: "moz-ava-away",
			busy: "moz-ava-busy",
		},
		placeholder: {
			true: "moz-ava-placeholder",
			false: "",
		},
		size: {
			xs: "moz-ava-xs",
			sm: "moz-ava-sm",
			md: "moz-ava-md",
			lg: "moz-ava-lg",
			xl: "moz-ava-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const avatarGroupVariants = cva("moz-ava-group", {
	variants: {
		size: {
			xs: "moz-ava-group-xs",
			sm: "moz-ava-group-sm",
			md: "moz-ava-group-md",
			lg: "moz-ava-group-lg",
			xl: "moz-ava-group-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

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
					avatarVariants({
						presence,
						placeholder: placeholder ?? !src,
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
