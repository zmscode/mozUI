import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Chat.css";

const chatVariants = cva("moz-cht", {
	variants: {
		placement: {
			start: "moz-cht-start",
			end: "moz-cht-end",
		},
	},
});

const chatImageVariants = cva("moz-cht-image");

const chatHeaderVariants = cva("moz-cht-header");

const chatFooterVariants = cva("moz-cht-footer");

const chatBubbleVariants = cva("moz-cht-bubble", {
	variants: {
		color: {
			primary: "moz-cht-bubble-primary",
			secondary: "moz-cht-bubble-secondary",
			accent: "moz-cht-bubble-accent",
			neutral: "moz-cht-bubble-neutral",
			info: "moz-cht-bubble-info",
			success: "moz-cht-bubble-success",
			warning: "moz-cht-bubble-warning",
			error: "moz-cht-bubble-error",
		},
	},
});

export interface ChatProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof chatVariants> {}

export interface ChatImageProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ChatBubbleProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
		VariantProps<typeof chatBubbleVariants> {}

export const Chat = forwardRef<HTMLDivElement, ChatProps>(
	({ className, placement, ...props }, ref) => {
		return (
			<div
				className={cn(chatVariants({ placement, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const ChatImage = forwardRef<HTMLDivElement, ChatImageProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(chatImageVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const ChatHeader = forwardRef<HTMLDivElement, ChatHeaderProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(chatHeaderVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const ChatFooter = forwardRef<HTMLDivElement, ChatFooterProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(chatFooterVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
	({ className, color, ...props }, ref) => {
		return (
			<div
				className={cn(chatBubbleVariants({ color, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Chat.displayName = "Chat";
ChatImage.displayName = "ChatImage";
ChatHeader.displayName = "ChatHeader";
ChatFooter.displayName = "ChatFooter";
ChatBubble.displayName = "ChatBubble";
