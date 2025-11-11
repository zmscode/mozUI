import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Card.css";

const cardVariants = cva("moz-crd", {
	variants: {
		style: {
			border: "moz-crd-border",
			dash: "moz-crd-dash",
		},
		modifier: {
			side: "moz-crd-side",
			imageFull: "moz-crd-image-full",
		},
		size: {
			xs: "moz-crd-xs",
			sm: "moz-crd-sm",
			md: "moz-crd-md",
			lg: "moz-crd-lg",
			xl: "moz-crd-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const cardBodyVariants = cva("moz-crd-body");

const cardTitleVariants = cva("moz-crd-title");

const cardActionsVariants = cva("moz-crd-actions");

const cardListVariants = cva("", {
	variants: {
		spacing: {
			none: "space-y-0",
			xs: "space-y-1",
			sm: "space-y-2",
			md: "space-y-4",
			lg: "space-y-6",
			xl: "space-y-8",
		},
	},
	defaultVariants: {
		spacing: "md",
	},
});

const cardListItemVariants = cva("", {
	variants: {
		active: {
			true: "active",
		},
		disabled: {
			true: "disabled",
		},
	},
});

export interface CardProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "style">,
		VariantProps<typeof cardVariants> {}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardListProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardListVariants> {}

export interface CardListItemProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardListItemVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, style, modifier, size, ...props }, ref) => {
		return (
			<div
				className={cn(
					cardVariants({ style, modifier, size, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(cardBodyVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
	({ className, ...props }, ref) => {
		return (
			<h2
				className={cn(cardTitleVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(cardActionsVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CardList = forwardRef<HTMLDivElement, CardListProps>(
	({ className, spacing, ...props }, ref) => {
		return (
			<div
				className={cn(cardListVariants({ spacing, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CardListItem = forwardRef<HTMLDivElement, CardListItemProps>(
	({ className, active, disabled, ...props }, ref) => {
		return (
			<div
				className={cn(
					cardListItemVariants({ active, disabled, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Card.displayName = "Card";
CardBody.displayName = "CardBody";
CardTitle.displayName = "CardTitle";
CardActions.displayName = "CardActions";
CardList.displayName = "CardList";
CardListItem.displayName = "CardListItem";
