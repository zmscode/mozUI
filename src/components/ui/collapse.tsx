import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const collapseVariants = cva("collapse", {
	variants: {
		icon: {
			arrow: "collapse-arrow",
			plus: "collapse-plus",
		},
		state: {
			open: "collapse-open",
			close: "collapse-close",
		},
	},
});

export interface CollapseProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof collapseVariants> {
	title?: React.ReactNode;
	defaultOpen?: boolean;
}

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
	(
		{
			className,
			icon,
			state,
			title,
			defaultOpen,
			children,
			...props
		},
		ref
	) => {
		return (
			<div
				className={cn(collapseVariants({ icon, state, className }))}
				ref={ref}
				{...props}
			>
				<input
					type="checkbox"
					defaultChecked={defaultOpen}
					className="peer"
				/>
				{title && <div className="collapse-title">{title}</div>}
				<div className="collapse-content">{children}</div>
			</div>
		);
	}
);

Collapse.displayName = "Collapse";

export { Collapse, collapseVariants };
