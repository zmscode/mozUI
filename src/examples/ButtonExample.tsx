import { Button } from "../components/ui/button";
import { Code, CodeLine } from "../components/ui/code";
import {
	PlusIcon,
	TrashIcon,
	DownloadIcon,
	ArrowRightIcon,
	HeartIcon,
} from "@phosphor-icons/react";
import { Text } from "../components/ui/text";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "../components/ui/table";

export function ButtonExample() {
	return (
		<div className="space-y-12">
			<div>
				<Text as="h1" size="4xl" weight="bold" className="mb-4">
					Button
				</Text>
				<Text as="p" size="lg" className="text-base-content/70 mb-6">
					Interactive buttons for actions and navigation with multiple
					variants and styles.
				</Text>

				<div className="bg-base-200 rounded-box p-6 space-y-3">
					<Text as="h3" size="xl" weight="semibold">
						Component Overview
					</Text>
					<Text className="text-base-content/70">
						The Button component is the primary interactive element for
						triggering actions and navigation. It's highly customizable with
						multiple color variants, styles, sizes, and modifiers to fit any
						use case.
					</Text>
					<div className="mt-4">
						<Text weight="semibold" className="mb-2">
							Key Features:
						</Text>
						<ul className="list-disc list-inside space-y-1 text-base-content/70">
							<li>
								8 semantic color variants for different action types
							</li>
							<li>
								5 style variants (outline, dash, soft, ghost, link) plus
								default
							</li>
							<li>5 size options from xs to xl</li>
							<li>
								Shape modifiers (wide, block, square, circle) for layout
								control
							</li>
							<li>State management (active, disabled)</li>
							<li>Full support for icons before or after text</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Basic Button */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Basic Usage
				</Text>
				<Text as="p" className="text-base-content/70">
					The simplest button with default styling. Use this for standard
					actions that don't require special emphasis.
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<Button>Click me</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Button>Click me</Button>"}</CodeLine>
				</Code>
			</section>

			{/* Colors */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Colors
				</Text>
				<Text as="p" className="text-base-content/70">
					Use the color prop to communicate action intent. Primary for main
					actions, secondary for alternatives, success for confirmations,
					error for destructive actions, etc. Choose colors that align with
					the button's purpose.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Button color="neutral">Neutral</Button>
					<Button color="primary">Primary</Button>
					<Button color="secondary">Secondary</Button>
					<Button color="accent">Accent</Button>
					<Button color="info">Info</Button>
					<Button color="success">Success</Button>
					<Button color="warning">Warning</Button>
					<Button color="error">Error</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Button color="neutral">Neutral</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary">Primary</Button>`}</CodeLine>
					<CodeLine>{`<Button color="secondary">Secondary</Button>`}</CodeLine>
					<CodeLine>{`<Button color="accent">Accent</Button>`}</CodeLine>
					<CodeLine>{`<Button color="info">Info</Button>`}</CodeLine>
					<CodeLine>{`<Button color="success">Success</Button>`}</CodeLine>
					<CodeLine>{`<Button color="warning">Warning</Button>`}</CodeLine>
					<CodeLine>{`<Button color="error">Error</Button>`}</CodeLine>
				</Code>
			</section>

			{/* Styles */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Styles
				</Text>
				<Text as="p" className="text-base-content/70">
					The style prop changes visual weight and emphasis. "outline" for
					secondary actions, "ghost" for minimal chrome, "link" for text-like
					buttons, "soft" for subtle emphasis, and "dash" for a unique dashed
					border. All styles work with any color.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Button color="primary">Default</Button>
					<Button color="primary" style="outline">
						Outline
					</Button>
					<Button color="primary" style="dash">
						Dash
					</Button>
					<Button color="primary" style="soft">
						Soft
					</Button>
					<Button color="primary" style="ghost">
						Ghost
					</Button>
					<Button color="primary" style="link">
						Link
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Button color="primary">Default</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" style="outline">Outline</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" style="dash">Dash</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" style="soft">Soft</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" style="ghost">Ghost</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" style="link">Link</Button>`}</CodeLine>
				</Code>
			</section>

			{/* Sizes */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Sizes
				</Text>
				<Text as="p" className="text-base-content/70">
					Control button size with the size prop to establish visual
					hierarchy. Use xs/sm for compact interfaces, default for standard
					buttons, and lg/xl for hero sections or primary CTAs. Size affects
					both padding and font size.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap items-center gap-2">
					<Button color="primary" size="xs">
						Extra Small
					</Button>
					<Button color="primary" size="sm">
						Small
					</Button>
					<Button color="primary" size="default">
						Default
					</Button>
					<Button color="primary" size="lg">
						Large
					</Button>
					<Button color="primary" size="xl">
						Extra Large
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Button color="primary" size="xs">Extra Small</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" size="sm">Small</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" size="default">Default</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" size="lg">Large</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" size="xl">Extra Large</Button>`}</CodeLine>
				</Code>
			</section>

			{/* With Icons */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					With Icons
				</Text>
				<Text as="p" className="text-base-content/70">
					Enhance buttons with icons to clarify their purpose. Place icons
					before text for actions (add, delete) or after text for directional
					cues (next, download). Icons improve recognition and make buttons
					more scannable.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Button color="primary">
						<PlusIcon size={20} weight="bold" />
						Add Item
					</Button>
					<Button color="error">
						<TrashIcon size={20} weight="bold" />
						Delete
					</Button>
					<Button color="success">
						Download
						<DownloadIcon size={20} weight="bold" />
					</Button>
					<Button color="secondary">
						Continue
						<ArrowRightIcon size={20} weight="bold" />
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Button color="primary">`}</CodeLine>
					<CodeLine>{`  <PlusIcon size={20} weight="bold" />`}</CodeLine>
					<CodeLine>{"  Add Item"}</CodeLine>
					<CodeLine>{"</Button>"}</CodeLine>
					<CodeLine />
					<CodeLine>{`<Button color="success">`}</CodeLine>
					<CodeLine>{"  Download"}</CodeLine>
					<CodeLine>{`  <DownloadIcon size={20} weight="bold" />`}</CodeLine>
					<CodeLine>{"</Button>"}</CodeLine>
				</Code>
			</section>

			{/* Icon Only */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Icon Only
				</Text>
				<Text as="p" className="text-base-content/70">
					Use modifier="square" or modifier="circle" for icon-only buttons.
					These are perfect for toolbars, action menus, or when space is
					limited. Make sure the icon's meaning is clear, or provide a
					tooltip for accessibility.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Button color="primary" modifier="square">
						<PlusIcon size={20} weight="bold" />
					</Button>
					<Button color="error" modifier="square">
						<TrashIcon size={20} weight="bold" />
					</Button>
					<Button color="primary" modifier="circle">
						<HeartIcon size={20} weight="bold" />
					</Button>
					<Button color="accent" modifier="circle">
						<DownloadIcon size={20} weight="bold" />
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>
						{'<Button color="primary" modifier="square">'}
					</CodeLine>
					<CodeLine>
						{'  <PlusIcon size={20} weight="bold" />'}
					</CodeLine>
					<CodeLine>{"</Button>"}</CodeLine>
					<CodeLine />
					<CodeLine>
						{'<Button color="primary" modifier="circle">'}
					</CodeLine>
					<CodeLine>
						{'  <HeartIcon size={20} weight="bold" />'}
					</CodeLine>
					<CodeLine>{"</Button>"}</CodeLine>
				</Code>
			</section>

			{/* Modifiers */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Width Modifiers
				</Text>
				<Text as="p" className="text-base-content/70">
					Use modifier="wide" for extra horizontal padding or
					modifier="block" to make the button full-width. Wide buttons draw
					more attention, while block buttons work well in forms, mobile
					layouts, or card footers.
				</Text>

				<div className="p-6 bg-base-200 rounded-box space-y-2">
					<Button color="primary" modifier="wide">
						Wide Button
					</Button>
					<Button color="secondary" modifier="block">
						Block Button
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>
						{
							'<Button color="primary" modifier="wide">Wide Button</Button>'
						}
					</CodeLine>
					<CodeLine>
						{
							'<Button color="secondary" modifier="block">Block Button</Button>'
						}
					</CodeLine>
				</Code>
			</section>

			{/* States */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					States
				</Text>
				<Text as="p" className="text-base-content/70">
					Control button state with the behavior prop or disabled attribute.
					Use behavior="active" to show a pressed state (for toggles or
					current selection) and behavior="disabled" or disabled={true} to
					prevent interaction.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex flex-wrap gap-2">
					<Button color="primary">Normal</Button>
					<Button color="primary" behavior="active">
						Active
					</Button>
					<Button color="primary" disabled>
						Disabled
					</Button>
					<Button color="primary" behavior="disabled">
						Disabled (styled)
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{`<Button color="primary">Normal</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" behavior="active">Active</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" disabled>Disabled</Button>`}</CodeLine>
					<CodeLine>{`<Button color="primary" behavior="disabled">Disabled (styled)</Button>`}</CodeLine>
				</Code>
			</section>

			{/* Button Group */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Button Group
				</Text>
				<Text as="p" className="text-base-content/70">
					Combine buttons using the join utility class to create button
					groups. Add className="join-item" to each button. This is useful
					for segmented controls, toolbars, or grouping related actions
					together visually.
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<div className="join">
						<Button color="primary" className="join-item">
							Button 1
						</Button>
						<Button color="primary" className="join-item">
							Button 2
						</Button>
						<Button color="primary" className="join-item">
							Button 3
						</Button>
					</div>
				</div>

				<Code className="w-full">
					<CodeLine>{`<div className="join">`}</CodeLine>
					<CodeLine>{`  <Button color="primary" className="join-item">Button 1</Button>`}</CodeLine>
					<CodeLine>{`  <Button color="primary" className="join-item">Button 2</Button>`}</CodeLine>
					<CodeLine>{`  <Button color="primary" className="join-item">Button 3</Button>`}</CodeLine>
					<CodeLine>{"</div>"}</CodeLine>
				</Code>
			</section>

			{/* Real-world Examples */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Real-world Examples
				</Text>
				<Text as="p" className="text-base-content/70">
					Common button patterns you'll use in real applications: primary
					action with secondary cancel, navigation with back/forward buttons,
					and destructive actions. These demonstrate proper color usage,
					hierarchy, and icon placement.
				</Text>

				<div className="p-6 bg-base-200 rounded-box space-y-4">
					<div className="flex gap-2">
						<Button color="primary">
							<PlusIcon size={20} weight="bold" />
							New Post
						</Button>
						<Button color="neutral" style="outline">
							Cancel
						</Button>
					</div>

					<div className="flex justify-between items-center">
						<Button style="ghost">Back</Button>
						<div className="flex gap-2">
							<Button color="neutral" style="outline">
								Save Draft
							</Button>
							<Button color="primary">
								Publish
								<ArrowRightIcon size={20} weight="bold" />
							</Button>
						</div>
					</div>

					<Button color="error" modifier="block">
						<TrashIcon size={20} weight="bold" />
						Delete Account
					</Button>
				</div>

				<Code className="w-full">
					<CodeLine>{'<div className="flex gap-2">'}</CodeLine>
					<CodeLine>{'  <Button color="primary">'}</CodeLine>
					<CodeLine>
						{'    <PlusIcon size={20} weight="bold" />'}
					</CodeLine>
					<CodeLine>{"    New Post"}</CodeLine>
					<CodeLine>{"  </Button>"}</CodeLine>
					<CodeLine>
						{
							'  <Button color="neutral" style="outline">Cancel</Button>'
						}
					</CodeLine>
					<CodeLine>{"</div>"}</CodeLine>
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
								<TableCell>Button color variant</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									style
								</TableCell>
								<TableCell className="font-mono text-sm">
									"outline" | "dash" | "soft" | "ghost" |
									"link"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>Button style variant</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									size
								</TableCell>
								<TableCell className="font-mono text-sm">
									"xs" | "sm" | "default" | "lg" | "xl"
								</TableCell>
								<TableCell>"default"</TableCell>
								<TableCell>Button size</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									modifier
								</TableCell>
								<TableCell className="font-mono text-sm">
									"wide" | "block" | "square" | "circle"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>
									Button width/shape modifier
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									behavior
								</TableCell>
								<TableCell className="font-mono text-sm">
									"active" | "disabled"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>Button state behavior</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>
		</div>
	);
}
