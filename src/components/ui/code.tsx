import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const codeVariants = cva("mockup-code");

export interface CodeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof codeVariants> {}

export interface CodeLineProps extends React.HTMLAttributes<HTMLPreElement> {
	prefix?: string;
}

const Code = React.forwardRef<HTMLDivElement, CodeProps>(
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

const CodeLine = React.forwardRef<HTMLPreElement, CodeLineProps>(
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

export { Code, CodeLine, codeVariants };
