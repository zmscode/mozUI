import * as PhosphorIcons from "@phosphor-icons/react";
import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import type { ComponentType, FunctionComponent } from "react";
import { cn } from "../../utils/tailwind";

type IconColor =
	| "default"
	| "primary"
	| "secondary"
	| "accent"
	| "neutral"
	| "info"
	| "success"
	| "warning"
	| "error";

export interface IconProps extends Omit<PhosphorIconProps, "ref" | "color"> {
	icon: string;
	color?: IconColor | string;
}

export const Icon: FunctionComponent<IconProps> = ({
	icon,
	color,
	className,
	...props
}) => {
	const iconName = icon
		.split("-")
		.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join("");

	const IconComponent = (
		PhosphorIcons as unknown as Record<
			string,
			ComponentType<PhosphorIconProps>
		>
	)[iconName];

	if (!IconComponent) {
		console.warn(
			`Icon "${icon}" (${iconName}) not found in @phosphor-icons/react`
		);
		return <PhosphorIcons.QuestionIcon {...props} />;
	}

	const colorMap: Record<IconColor, string> = {
		default: "text-base-content",
		primary: "text-primary",
		secondary: "text-secondary",
		accent: "text-accent",
		neutral: "text-neutral",
		info: "text-info",
		success: "text-success",
		warning: "text-warning",
		error: "text-error",
	};

	const isDesignSystemColor = color && color in colorMap;
	const colorClass = isDesignSystemColor ? colorMap[color as IconColor] : "";
	const customColor = isDesignSystemColor ? undefined : color;

	return (
		<IconComponent
			className={cn(colorClass, className)}
			color={customColor}
			{...props}
		/>
	);
};

export default Icon;
