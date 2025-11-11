import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/tailwind";
import { forwardRef, type HTMLAttributes } from "react";
import "./Code.css";

const codeVariants = cva("moz-cde");

export interface CodeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof codeVariants> {}

export interface CodeLineProps extends HTMLAttributes<HTMLPreElement> {
	prefix?: string;
}

export const Code = forwardRef<HTMLDivElement, CodeProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(codeVariants({ className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

export const CodeLine = forwardRef<HTMLPreElement, CodeLineProps>(
	({ className, prefix, children, ...props }, ref) => {
		return (
			<pre
				data-prefix={prefix}
				className={className}
				ref={ref}
				{...props}
			>
				<code>{children}</code>
			</pre>
		);
	}
);

Code.displayName = "Code";
CodeLine.displayName = "CodeLine";
