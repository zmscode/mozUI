import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";
import {
	Link as RouterLink,
	type LinkProps as RouterLinkProps,
} from "@tanstack/react-router";

const linkVariants = cva("link", {
	variants: {
		linkStyle: {
			hover: "link-hover",
			underline: "link-underline",
		},
		color: {
			neutral: "link-neutral",
			primary: "link-primary",
			secondary: "link-secondary",
			accent: "link-accent",
			info: "link-info",
			success: "link-success",
			warning: "link-warning",
			error: "link-error",
		},
	},
});

export interface LinkProps
	extends Omit<
			React.AnchorHTMLAttributes<HTMLAnchorElement>,
			"href" | "color"
		>,
		VariantProps<typeof linkVariants> {
	to?: RouterLinkProps["to"];
	params?: RouterLinkProps["params"];
	search?: RouterLinkProps["search"];
	hash?: RouterLinkProps["hash"];
	href?: string;
	external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			className,
			linkStyle,
			color,
			to,
			params,
			search,
			hash,
			href,
			external,
			...props
		},
		ref
	) => {
		if (to) {
			return (
				<RouterLink
					to={to}
					params={params}
					search={search}
					hash={hash}
					className={cn(
						linkVariants({ linkStyle, color, className })
					)}
					ref={ref as React.Ref<HTMLAnchorElement>}
					{...props}
				/>
			);
		}

		return (
			<a
				href={href}
				className={cn(linkVariants({ linkStyle, color, className }))}
				ref={ref}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				{...props}
			/>
		);
	}
);

Link.displayName = "Link";

export { Link, linkVariants };
