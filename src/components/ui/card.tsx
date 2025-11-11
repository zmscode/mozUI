import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const cardVariants = cva("card", {
	variants: {
		style: {
			border: "card-border",
			dash: "card-dash",
		},
		modifier: {
			side: "card-side",
			imageFull: "image-full",
		},
		size: {
			xs: "card-xs",
			sm: "card-sm",
			md: "card-md",
			lg: "card-lg",
			xl: "card-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

const cardBodyVariants = cva("card-body");

const cardTitleVariants = cva("card-title");

const cardActionsVariants = cva("card-actions");

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
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "style">,
		VariantProps<typeof cardVariants> {}

export interface CardBodyProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardTitleProps
	extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface CardActionsProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardListProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardListVariants> {}

export interface CardListItemProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardListItemVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, style, modifier, size, ...props }, ref) => {
		return (
			<div
				className={cn(cardVariants({ style, modifier, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
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

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
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

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
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

const CardList = React.forwardRef<HTMLDivElement, CardListProps>(
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

const CardListItem = React.forwardRef<HTMLDivElement, CardListItemProps>(
	({ className, active, disabled, ...props }, ref) => {
		return (
			<div
				className={cn(cardListItemVariants({ active, disabled, className }))}
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

export {
	Card,
	CardBody,
	CardTitle,
	CardActions,
	CardList,
	CardListItem,
	cardVariants,
	cardBodyVariants,
	cardTitleVariants,
	cardActionsVariants,
	cardListVariants,
	cardListItemVariants,
};
