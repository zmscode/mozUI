import * as React from "react";
import { DayPicker } from "react-day-picker";
import type { DayPickerProps } from "react-day-picker";
import { cn } from "../../utils/tailwind";

export type CalendarProps = DayPickerProps & {
	className?: string;
};

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
	({ className, ...props }, ref) => {
		return (
			<div ref={ref}>
				<DayPicker className={cn("react-day-picker", className)} {...props} />
			</div>
		);
	}
);

Calendar.displayName = "Calendar";

export { Calendar };
