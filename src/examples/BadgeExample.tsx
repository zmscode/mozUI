import { Badge } from "../components/ui/badge";
import { Code, CodeLine } from "../components/ui/code";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Text } from "../components/ui/text";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "../components/ui/table";

export function BadgeExample() {
	return (
		<div className="space-y-12">
			<div>
				<Text as="h1" size="4xl" weight="bold" className="mb-4">
					Badge
				</Text>
				<Text as="p" size="lg" className="text-base-content/70 mb-6">
					Small labels and tags for status, counts, and categories.
				</Text>

				<div className="bg-base-200 rounded-box p-6 space-y-3">
					<Text as="h3" size="xl" weight="semibold">
						Component Overview
					</Text>
					<Text className="text-base-content/70">
						The Badge component is a small, inline label used to highlight
						information, status, counts, or categories. It's versatile and
						can be used standalone or combined with other components.
					</Text>
					<div className="mt-4">
						<Text weight="semibold" className="mb-2">
							Key Features:
						</Text>
						<ul className="list-disc list-inside space-y-1 text-base-content/70">
							<li>
								8 semantic color variants (neutral, primary, secondary,
								etc.)
							</li>
							<li>
								4 style variants (outline, dash, soft, ghost) plus default
							</li>
							<li>5 size options from xs to xl</li>
							<li>Works inline with text or as standalone elements</li>
							<li>Supports icons for enhanced meaning</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Basic Badge */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Basic Usage
				</Text>
				<Text as="p" className="text-base-content/70">
					The simplest badge with default styling. Use it to draw attention
					to information or add labels to elements.
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<Badge>Default Badge</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Badge>Default Badge</Badge>"}</CodeLine>
				</Code>
			</section>

			{/* Colors */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Colors
				</Text>
				<Text as="p" className="text-base-content/70">
					Use the color prop to apply semantic colors. Choose colors that
					match the meaning of your badge: success for positive states,
					error for warnings or deletions, info for neutral information, etc.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Badge color="neutral">Neutral</Badge>
					<Badge color="primary">Primary</Badge>
					<Badge color="secondary">Secondary</Badge>
					<Badge color="accent">Accent</Badge>
					<Badge color="info">Info</Badge>
					<Badge color="success">Success</Badge>
					<Badge color="warning">Warning</Badge>
					<Badge color="error">Error</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Badge color="neutral">Neutral</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary">Primary</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="secondary">Secondary</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="accent">Accent</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="info">Info</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="success">Success</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="warning">Warning</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="error">Error</Badge>`}</CodeLine>
				</Code>
			</section>

			{/* Styles */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Styles
				</Text>
				<Text as="p" className="text-base-content/70">
					The style prop changes the badge appearance. "outline" creates a
					bordered badge, "dash" adds a dashed border, "soft" provides a
					subtle background, and "ghost" is minimal. Combine with any color
					variant.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Badge color="primary">Default</Badge>
					<Badge color="primary" style="outline">
						Outline
					</Badge>
					<Badge color="primary" style="dash">
						Dash
					</Badge>
					<Badge color="primary" style="soft">
						Soft
					</Badge>
					<Badge color="primary" style="ghost">
						Ghost
					</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Badge color="primary">Default</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" style="outline">Outline</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" style="dash">Dash</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" style="soft">Soft</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" style="ghost">Ghost</Badge>`}</CodeLine>
				</Code>
			</section>

			{/* Sizes */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Sizes
				</Text>
				<Text as="p" className="text-base-content/70">
					Control badge size with the size prop. Options range from "xs"
					(extra small) to "xl" (extra large). Choose sizes based on context:
					xs/sm for compact UIs, default for general use, lg/xl for emphasis.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap items-center gap-2">
					<Badge color="primary" size="xs">
						XS
					</Badge>
					<Badge color="primary" size="sm">
						Small
					</Badge>
					<Badge color="primary" size="default">
						Default
					</Badge>
					<Badge color="primary" size="lg">
						Large
					</Badge>
					<Badge color="primary" size="xl">
						XL
					</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Badge color="primary" size="xs">XS</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" size="sm">Small</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" size="default">Default</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" size="lg">Large</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="primary" size="xl">XL</Badge>`}</CodeLine>
				</Code>
			</section>

			{/* With Icons */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					With Icons
				</Text>
				<Text as="p" className="text-base-content/70">
					Add icons inside badges to reinforce their meaning. Icons are
					particularly effective for status badges (checkmarks, X marks) or
					notification counts. Place the icon before or after the text as
					needed.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Badge color="success">
						<CheckIcon size={16} weight="bold" />
						Verified
					</Badge>
					<Badge color="error">
						<XIcon size={16} weight="bold" />
						Blocked
					</Badge>
					<Badge color="info">99+</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Badge color="success">`}</CodeLine>
					<CodeLine>{`  <CheckIcon size={16} weight="bold" />`}</CodeLine>
					<CodeLine>{"  Verified"}</CodeLine>
					<CodeLine>{"</Badge>"}</CodeLine>
					<CodeLine />
					<CodeLine>{`<Badge color="error">`}</CodeLine>
					<CodeLine>{`  <XIcon size={16} weight="bold" />`}</CodeLine>
					<CodeLine>{"  Blocked"}</CodeLine>
					<CodeLine>{"</Badge>"}</CodeLine>
					<CodeLine />
					<CodeLine>{`<Badge color="info">99+</Badge>`}</CodeLine>
				</Code>
			</section>

			{/* In Text */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Inline with Text
				</Text>
				<Text as="p" className="text-base-content/70">
					Badges work seamlessly inline with text. They automatically align
					with the surrounding text, making them perfect for notification
					counts, status indicators, or highlighting specific words or
					numbers in sentences.
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<Text as="p" size="lg">
						Your inbox has <Badge color="error">5</Badge> unread
						messages
					</Text>
				</div>

				<Code className="w-full">
					<CodeLine>{'<Text as="p" size="lg">'}</CodeLine>
					<CodeLine>
						{
							'  Your inbox has <Badge color="error">5</Badge> unread messages'
						}
					</CodeLine>
					<CodeLine>{"</Text>"}</CodeLine>
				</Code>
			</section>

			{/* Combined Styles */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Combined Styles
				</Text>
				<Text as="p" className="text-base-content/70">
					Mix colors, sizes, and styles for variety.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Badge color="success" size="lg">
						Active
					</Badge>
					<Badge color="warning" style="outline" size="sm">
						Pending
					</Badge>
					<Badge color="error" style="soft">
						Inactive
					</Badge>
					<Badge color="info" style="dash" size="xs">
						Beta
					</Badge>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Badge color="success" size="lg">Active</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="warning" style="outline" size="sm">Pending</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="error" style="soft">Inactive</Badge>`}</CodeLine>
					<CodeLine>{`<Badge color="info" style="dash" size="xs">Beta</Badge>`}</CodeLine>
				</Code>
			</section>

			{/* Real-world Examples */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Real-world Examples
				</Text>
				<Text as="p" className="text-base-content/70">
					Here are practical examples showing how badges are commonly used:
					status indicators with icons, priority labels, and category tags.
					These patterns work well in lists, cards, and content management
					interfaces.
				</Text>

				<div className="p-6 bg-base-200 rounded-box space-y-4">
					<div className="flex items-center gap-2">
						<Text weight="semibold">Status:</Text>
						<Badge color="success" style="soft">
							<CheckIcon size={14} weight="bold" />
							Published
						</Badge>
					</div>

					<div className="flex items-center gap-2">
						<Text weight="semibold">Priority:</Text>
						<Badge color="error">High</Badge>
					</div>

					<div className="flex items-center gap-2">
						<Text weight="semibold">Categories:</Text>
						<Badge color="primary" style="outline" size="sm">
							React
						</Badge>
						<Badge color="accent" style="outline" size="sm">
							TypeScript
						</Badge>
						<Badge color="secondary" style="outline" size="sm">
							UI
						</Badge>
					</div>
				</div>

				<Code className="w-full">
					<CodeLine>
						{'<Badge color="success" style="soft">'}
					</CodeLine>
					<CodeLine>
						{'  <CheckIcon size={14} weight="bold" />'}
					</CodeLine>
					<CodeLine>{"  Published"}</CodeLine>
					<CodeLine>{"</Badge>"}</CodeLine>
					<CodeLine />
					<CodeLine>
						{
							'<Badge color="primary" style="outline" size="sm">React</Badge>'
						}
					</CodeLine>
					<CodeLine>
						{
							'<Badge color="accent" style="outline" size="sm">TypeScript</Badge>'
						}
					</CodeLine>
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
									color
								</TableCell>
								<TableCell className="font-mono text-sm">
									"neutral" | "primary" | "secondary" |
									"accent" | "info" | "success" | "warning" |
									"error"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>Badge color variant</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									style
								</TableCell>
								<TableCell className="font-mono text-sm">
									"outline" | "dash" | "soft" | "ghost"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>Badge style variant</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									size
								</TableCell>
								<TableCell className="font-mono text-sm">
									"xs" | "sm" | "default" | "lg" | "xl"
								</TableCell>
								<TableCell>"default"</TableCell>
								<TableCell>Badge size</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>
		</div>
	);
}
