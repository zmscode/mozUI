import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/tailwind";

const tableVariants = cva("table", {
	variants: {
		modifier: {
			zebra: "table-zebra",
			pinRows: "table-pin-rows",
			pinCols: "table-pin-cols",
		},
		size: {
			xs: "table-xs",
			sm: "table-sm",
			md: "table-md",
			lg: "table-lg",
			xl: "table-xl",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface TableProps
	extends React.TableHTMLAttributes<HTMLTableElement>,
		VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
	({ className, modifier, size, ...props }, ref) => {
		return (
			<table
				className={cn(tableVariants({ modifier, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Table.displayName = "Table";

const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn(className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn(className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot ref={ref} className={cn(className)} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr ref={ref} className={cn(className)} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th ref={ref} className={cn(className)} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td ref={ref} className={cn(className)} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption ref={ref} className={cn(className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableRow,
	TableHead,
	TableCell,
	TableCaption,
	tableVariants,
};
