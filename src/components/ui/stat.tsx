import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const statsVariants = cva("stats", {
	variants: {
		direction: {
			horizontal: "stats-horizontal",
			vertical: "stats-vertical",
		},
	},
});

const statVariants = cva("stat");

const statTitleVariants = cva("stat-title");

const statValueVariants = cva("stat-value");

const statDescVariants = cva("stat-desc");

const statFigureVariants = cva("stat-figure");

const statActionsVariants = cva("stat-actions");

export interface StatsProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof statsVariants> {}

export interface StatProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface StatTitleProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface StatValueProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface StatDescProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface StatFigureProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export interface StatActionsProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
	({ className, direction, ...props }, ref) => {
		return (
			<div
				className={cn(statsVariants({ direction, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const StatTitle = React.forwardRef<HTMLDivElement, StatTitleProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statTitleVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const StatValue = React.forwardRef<HTMLDivElement, StatValueProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statValueVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const StatDesc = React.forwardRef<HTMLDivElement, StatDescProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statDescVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const StatFigure = React.forwardRef<HTMLDivElement, StatFigureProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statFigureVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

const StatActions = React.forwardRef<HTMLDivElement, StatActionsProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(statActionsVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Stats.displayName = "Stats";
Stat.displayName = "Stat";
StatTitle.displayName = "StatTitle";
StatValue.displayName = "StatValue";
StatDesc.displayName = "StatDesc";
StatFigure.displayName = "StatFigure";
StatActions.displayName = "StatActions";

export {
	Stats,
	Stat,
	StatTitle,
	StatValue,
	StatDesc,
	StatFigure,
	StatActions,
	statsVariants,
	statVariants,
	statTitleVariants,
	statValueVariants,
	statDescVariants,
	statFigureVariants,
	statActionsVariants,
};
