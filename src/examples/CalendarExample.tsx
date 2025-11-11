import { Calendar } from "../components/ui/calendar";
import { Code, CodeLine } from "../components/ui/code";
import { Text } from "../components/ui/text";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "../components/ui/table";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export function CalendarExample() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	);
	const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: undefined,
	});
	const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
		new Date(),
	]);

	return (
		<div className="space-y-12">
			<div>
				<Text as="h1" size="4xl" weight="bold" className="mb-4">
					Calendar
				</Text>
				<Text as="p" size="lg" className="text-base-content/70 mb-6">
					Interactive date picker component for selecting single
					dates, date ranges, or multiple dates.
				</Text>

				<div className="bg-base-200 rounded-box p-6 space-y-3">
					<Text as="h3" size="xl" weight="semibold">
						Component Overview
					</Text>
					<Text className="text-base-content/70">
						The Calendar component is a flexible date picker built
						on react-day-picker. It provides an intuitive interface
						for date selection with support for single dates,
						ranges, multiple dates, and extensive customization
						options.
					</Text>
					<div className="mt-4">
						<Text weight="semibold" className="mb-2">
							Key Features:
						</Text>
						<ul className="list-disc list-inside space-y-1 text-base-content/70">
							<li>Single date selection with controlled state</li>
							<li>Date range selection for booking interfaces</li>
							<li>
								Multiple date selection for flexible scheduling
							</li>
							<li>Disable specific dates or date ranges</li>
							<li>Custom modifiers for styling special dates</li>
							<li>Full keyboard navigation support</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Basic Calendar */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Basic Usage
				</Text>
				<Text as="p" className="text-base-content/70">
					The simplest calendar implementation with single date
					selection. Use the mode="single" prop and manage the
					selected date with React state. The onSelect callback
					receives the selected date.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-col items-start gap-4">
					<Calendar
						mode="single"
						selected={selectedDate}
						onSelect={setSelectedDate}
					/>
					{selectedDate && (
						<Text className="text-base-content/70">
							Selected: {selectedDate.toLocaleDateString()}
						</Text>
					)}
				</div>

				<Code className="w-full">
					<CodeLine>
						{"const [date, setDate] = useState<Date>();"}
					</CodeLine>
					<CodeLine />
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="single"'}</CodeLine>
					<CodeLine>{"  selected={date}"}</CodeLine>
					<CodeLine>{"  onSelect={setDate}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Date Range Selection */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Date Range Selection
				</Text>
				<Text as="p" className="text-base-content/70">
					Use mode="range" for selecting date ranges, perfect for
					booking systems, vacation planners, or any interface
					requiring start and end dates. Users click once to set the
					start date, then click again to set the end date.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-col items-start gap-4">
					<Calendar
						mode="range"
						selected={selectedRange}
						onSelect={setSelectedRange}
						required
					/>
					{selectedRange?.from && (
						<div className="space-y-1">
							<Text className="text-base-content/70">
								From: {selectedRange.from.toLocaleDateString()}
							</Text>
							{selectedRange.to && (
								<Text className="text-base-content/70">
									To: {selectedRange.to.toLocaleDateString()}
								</Text>
							)}
						</div>
					)}
				</div>

				<Code className="w-full">
					<CodeLine>
						{
							"const [range, setRange] = useState<{ from: Date | undefined; to?: Date }>();"
						}
					</CodeLine>
					<CodeLine />
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="range"'}</CodeLine>
					<CodeLine>{"  selected={range}"}</CodeLine>
					<CodeLine>{"  onSelect={setRange}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Multiple Dates Selection */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Multiple Dates Selection
				</Text>
				<Text as="p" className="text-base-content/70">
					Enable multiple date selection with mode="multiple". This is
					useful for scheduling events across non-consecutive days,
					marking holidays, or allowing users to select multiple
					appointment slots.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-col items-start gap-4">
					<Calendar
						mode="multiple"
						selected={multipleDates}
						onSelect={setMultipleDates}
					/>
					{multipleDates && multipleDates.length > 0 && (
						<div className="space-y-1">
							<Text weight="semibold">
								Selected Dates ({multipleDates.length}):
							</Text>
							{multipleDates.map((date) => (
								<Text
									key={date.toISOString()}
									className="text-base-content/70"
								>
									{date.toLocaleDateString()}
								</Text>
							))}
						</div>
					)}
				</div>

				<Code className="w-full">
					<CodeLine>
						{"const [dates, setDates] = useState<Date[]>();"}
					</CodeLine>
					<CodeLine />
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="multiple"'}</CodeLine>
					<CodeLine>{"  selected={dates}"}</CodeLine>
					<CodeLine>{"  onSelect={setDates}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Disabled Dates */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Disabled Dates
				</Text>
				<Text as="p" className="text-base-content/70">
					Use the disabled prop to prevent selection of specific
					dates. You can disable individual dates, date ranges, days
					of the week, or dates before/after a certain date. This is
					essential for booking systems with unavailable dates.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-col items-start gap-4">
					<Calendar
						mode="single"
						disabled={[
							{ before: new Date() },
							{ dayOfWeek: [0, 6] },
						]}
					/>
					<Text className="text-base-content/70 text-sm">
						Past dates and weekends are disabled
					</Text>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="single"'}</CodeLine>
					<CodeLine>{"  disabled={["}</CodeLine>
					<CodeLine>
						{"    { before: new Date() }, // Disable past dates"}
					</CodeLine>
					<CodeLine>
						{"    { dayOfWeek: [0, 6] }   // Disable weekends"}
					</CodeLine>
					<CodeLine>{"  ]}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Custom Styling */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Custom Styling
				</Text>
				<Text as="p" className="text-base-content/70">
					Apply custom styles using the modifiers and
					modifiersClassNames props. Highlight special dates like
					holidays, events, or deadlines with custom styling to
					provide visual context.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-col items-start gap-4">
					<Calendar
						mode="single"
						modifiers={{
							highlighted: [
								new Date(2025, 0, 1),
								new Date(2025, 11, 25),
							],
						}}
						modifiersClassNames={{
							highlighted:
								"bg-accent text-accent-content rounded-full",
						}}
					/>
					<Text className="text-base-content/70 text-sm">
						New Year's Day and Christmas are highlighted
					</Text>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="single"'}</CodeLine>
					<CodeLine>{"  modifiers={{"}</CodeLine>
					<CodeLine>
						{
							"    highlighted: [new Date(2025, 0, 1), new Date(2025, 11, 25)]"
						}
					</CodeLine>
					<CodeLine>{"  }}"}</CodeLine>
					<CodeLine>{"  modifiersClassNames={{"}</CodeLine>
					<CodeLine>
						{
							'    highlighted: "bg-accent text-accent-content rounded-full"'
						}
					</CodeLine>
					<CodeLine>{"  }}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Real-world Examples */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Real-world Examples
				</Text>
				<Text as="p" className="text-base-content/70">
					Common patterns for using the Calendar component: hotel
					booking with range selection and disabled past dates,
					appointment scheduling with disabled weekends, and event
					planning with multiple date selection.
				</Text>

				<div className="p-6 bg-base-200 rounded-box space-y-6">
					<div className="space-y-2">
						<Text weight="semibold">Hotel Booking Calendar:</Text>
						<Text className="text-base-content/70 text-sm">
							Range selection, past dates disabled, minimum stay
							of 1 night
						</Text>
						<Calendar
							mode="range"
							disabled={{ before: new Date() }}
							numberOfMonths={2}
						/>
					</div>
				</div>

				<Code className="w-full">
					<CodeLine>{"// Hotel Booking Pattern"}</CodeLine>
					<CodeLine>{"<Calendar"}</CodeLine>
					<CodeLine>{'  mode="range"'}</CodeLine>
					<CodeLine>{"  disabled={{ before: new Date() }}"}</CodeLine>
					<CodeLine>{"  numberOfMonths={2}"}</CodeLine>
					<CodeLine>{"/>"}</CodeLine>
				</Code>
			</section>

			{/* Props Table */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Component Props
				</Text>

				<div className="overflow-x-auto">
					<Table modifier="zebra" className="w-full">
						<TableHeader>
							<TableRow>
								<TableHead>Prop</TableHead>
								<TableHead>Type</TableHead>
								<TableHead>Default</TableHead>
								<TableHead>Description</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-mono text-sm">
									mode
								</TableCell>
								<TableCell className="font-mono text-sm">
									"single" | "multiple" | "range"
								</TableCell>
								<TableCell>"single"</TableCell>
								<TableCell>
									Selection mode for the calendar
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									selected
								</TableCell>
								<TableCell className="font-mono text-sm">
									Date | Date[] | DateRange
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>
									Currently selected date(s)
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									onSelect
								</TableCell>
								<TableCell className="font-mono text-sm">
									function
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>
									Callback when date is selected
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									disabled
								</TableCell>
								<TableCell className="font-mono text-sm">
									Matcher | Matcher[]
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>
									Dates that cannot be selected
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									numberOfMonths
								</TableCell>
								<TableCell className="font-mono text-sm">
									number
								</TableCell>
								<TableCell>1</TableCell>
								<TableCell>
									Number of months to display
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									modifiers
								</TableCell>
								<TableCell className="font-mono text-sm">
									object
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>
									Custom date modifiers for styling
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>
		</div>
	);
}
