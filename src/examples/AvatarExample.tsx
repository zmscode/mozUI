import { Avatar, AvatarGroup } from "../components/ui/avatar";
import { Mask } from "../components/ui/mask";
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

export function AvatarExample() {
	return (
		<div className="space-y-12">
			<div>
				<Text as="h1" size="4xl" weight="bold" className="mb-4">
					Avatar
				</Text>
				<Text as="p" size="lg" className="text-base-content/70 mb-6">
					Display user profile pictures with presence indicators and
					placeholder support.
				</Text>

				<div className="bg-base-200 rounded-box p-6 space-y-3">
					<Text as="h3" size="xl" weight="semibold">
						Component Overview
					</Text>
					<Text className="text-base-content/70">
						The Avatar component is a wrapper for displaying user
						images, initials, or icons. It provides a consistent way
						to represent users across your application with support
						for presence indicators, placeholders, and flexible
						sizing.
					</Text>
					<div className="mt-4">
						<Text weight="semibold" className="mb-2">
							Key Features:
						</Text>
						<ul className="list-disc list-inside space-y-1 text-base-content/70">
							<li>
								Flexible sizing controlled by inner div width
								classes
							</li>
							<li>Presence indicators (online/offline status)</li>
							<li>
								Placeholder mode for initials or fallback
								content
							</li>
							<li>Works with Mask component for custom shapes</li>
							<li>AvatarGroup for displaying multiple avatars</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Basic Avatar */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Basic Usage
				</Text>
				<Text as="p" className="text-base-content/70">
					The Avatar component wraps an image in a sized container.
					Control the size using width utilities (w-8, w-12, w-16,
					w-24, etc.) and use rounded-full for circular avatars.
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<Avatar>
						<div className="w-24 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="User avatar"
							/>
						</div>
					</Avatar>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Avatar>"}</CodeLine>
					<CodeLine>
						{'  <div className="w-24 rounded-full">'}
					</CodeLine>
					<CodeLine>
						{'    <img src="..." alt="User avatar" />'}
					</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
				</Code>
			</section>

			{/* Avatar Sizes */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Sizes
				</Text>
				<Text as="p" className="text-base-content/70">
					Avatar size is controlled by the width class on the inner
					div. Common sizes: w-8 (2rem), w-12 (3rem), w-16 (4rem),
					w-24 (6rem). You can use any width utility to achieve the
					desired size.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex items-end gap-4">
					<Avatar>
						<div className="w-8 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Small"
							/>
						</div>
					</Avatar>
					<Avatar>
						<div className="w-12 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Medium"
							/>
						</div>
					</Avatar>
					<Avatar>
						<div className="w-16 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Large"
							/>
						</div>
					</Avatar>
					<Avatar>
						<div className="w-24 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Extra Large"
							/>
						</div>
					</Avatar>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Avatar>"}</CodeLine>
					<CodeLine>
						{'  <div className="w-8 rounded-full">  {/* Small */}'}
					</CodeLine>
					<CodeLine>{'    <img src="..." />'}</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
					<CodeLine />
					<CodeLine>{"<Avatar>"}</CodeLine>
					<CodeLine>
						{
							'  <div className="w-24 rounded-full"> {/* Extra Large */}'
						}
					</CodeLine>
					<CodeLine>{'    <img src="..." />'}</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
				</Code>
			</section>

			{/* With Presence Indicator */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Presence Indicator
				</Text>
				<Text as="p" className="text-base-content/70">
					Add the presence prop with "online" or "offline" to display
					a status indicator. This is useful for chat applications,
					user lists, or anywhere you need to show availability
					status.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex gap-4">
					<Avatar presence="online">
						<div className="w-16 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Online user"
							/>
						</div>
					</Avatar>
					<Avatar presence="offline">
						<div className="w-16 rounded-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Offline user"
							/>
						</div>
					</Avatar>
				</div>

				<Code className="w-full">
					<CodeLine>{'<Avatar presence="online">'}</CodeLine>
					<CodeLine>
						{'  <div className="w-16 rounded-full">'}
					</CodeLine>
					<CodeLine>
						{'    <img src="..." alt="Online user" />'}
					</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
					<CodeLine />
					<CodeLine>{'<Avatar presence="offline">'}</CodeLine>
					<CodeLine>
						{'  <div className="w-16 rounded-full">'}
					</CodeLine>
					<CodeLine>
						{'    <img src="..." alt="Offline user" />'}
					</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
				</Code>
			</section>

			{/* Placeholder Avatar */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Placeholder Avatar
				</Text>
				<Text as="p" className="text-base-content/70">
					Use the placeholder prop when displaying initials or
					fallback content instead of an image. Combine with
					background color utilities (bg-primary, bg-neutral, etc.)
					and text color utilities to create visually distinct
					placeholders.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex gap-4">
					<Avatar placeholder>
						<div className="w-16 rounded-full bg-neutral text-neutral-content">
							<Text size="xl">JD</Text>
						</div>
					</Avatar>
					<Avatar placeholder>
						<div className="w-16 rounded-full bg-primary text-primary-content">
							<Text size="xl">AI</Text>
						</div>
					</Avatar>
					<Avatar placeholder>
						<div className="w-16 rounded-full bg-accent text-accent-content">
							<Text size="xl">MK</Text>
						</div>
					</Avatar>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Avatar placeholder>"}</CodeLine>
					<CodeLine>
						{
							'  <div className="w-16 rounded-full bg-neutral text-neutral-content">'
						}
					</CodeLine>
					<CodeLine>
						{'    <span className="text-xl">JD</span>'}
					</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
				</Code>
			</section>

			{/* With Mask */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					With Mask Shapes
				</Text>
				<Text as="p" className="text-base-content/70">
					The Avatar component works seamlessly with the Mask
					component to create non-circular shapes. Use shapes like
					"squircle", "hexagon", or "triangle" for more creative
					designs. Note: Remove rounded-full from the inner div when
					using masks.
				</Text>

				<div className="p-6 bg-base-200 rounded-box flex gap-4">
					<Avatar>
						<div className="w-16">
							<Mask
								shape="squircle"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Squircle"
							/>
						</div>
					</Avatar>
					<Avatar>
						<div className="w-16">
							<Mask
								shape="hexagon"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Hexagon"
							/>
						</div>
					</Avatar>
					<Avatar>
						<div className="w-16">
							<Mask
								shape="triangle"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								alt="Triangle"
							/>
						</div>
					</Avatar>
				</div>

				<Code className="w-full">
					<CodeLine>{"<Avatar>"}</CodeLine>
					<CodeLine>{'  <div className="w-16">'}</CodeLine>
					<CodeLine>
						{'    <Mask shape="squircle" src="..." alt="Avatar" />'}
					</CodeLine>
					<CodeLine>{"  </div>"}</CodeLine>
					<CodeLine>{"</Avatar>"}</CodeLine>
				</Code>
			</section>

			{/* Avatar Group */}
			<section className="space-y-4">
				<Text as="h2" size="2xl" weight="semibold">
					Avatar Group
				</Text>
				<Text as="p" className="text-base-content/70">
					Use AvatarGroup to display multiple avatars in a stacked
					layout. This is perfect for showing team members,
					collaborators, or participants. The avatars will
					automatically overlap each other. You can add a placeholder
					avatar at the end to indicate additional users (e.g., "+3").
				</Text>

				<div className="p-6 bg-base-200 rounded-box">
					<AvatarGroup>
						<Avatar>
							<div className="w-12">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="User 1"
								/>
							</div>
						</Avatar>
						<Avatar>
							<div className="w-12">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="User 2"
								/>
							</div>
						</Avatar>
						<Avatar>
							<div className="w-12">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="User 3"
								/>
							</div>
						</Avatar>
						<Avatar placeholder>
							<div className="w-12 bg-neutral text-neutral-content">
								<Text>+3</Text>
							</div>
						</Avatar>
					</AvatarGroup>
				</div>

				<Code className="w-full">
					<CodeLine>{"<AvatarGroup>"}</CodeLine>
					<CodeLine>{"  <Avatar>"}</CodeLine>
					<CodeLine>{'    <div className="w-12">'}</CodeLine>
					<CodeLine>
						{'      <img src="..." alt="User 1" />'}
					</CodeLine>
					<CodeLine>{"    </div>"}</CodeLine>
					<CodeLine>{"  </Avatar>"}</CodeLine>
					<CodeLine>{"  <Avatar>"}</CodeLine>
					<CodeLine>{'    <div className="w-12">'}</CodeLine>
					<CodeLine>
						{'      <img src="..." alt="User 2" />'}
					</CodeLine>
					<CodeLine>{"    </div>"}</CodeLine>
					<CodeLine>{"  </Avatar>"}</CodeLine>
					<CodeLine>{"  <Avatar placeholder>"}</CodeLine>
					<CodeLine>
						{
							'    <div className="w-12 bg-neutral text-neutral-content">'
						}
					</CodeLine>
					<CodeLine>{"      <span>+3</span>"}</CodeLine>
					<CodeLine>{"    </div>"}</CodeLine>
					<CodeLine>{"  </Avatar>"}</CodeLine>
					<CodeLine>{"</AvatarGroup>"}</CodeLine>
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
									presence
								</TableCell>
								<TableCell className="font-mono text-sm">
									"online" | "offline"
								</TableCell>
								<TableCell>-</TableCell>
								<TableCell>Show presence indicator</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-mono text-sm">
									placeholder
								</TableCell>
								<TableCell className="font-mono text-sm">
									boolean
								</TableCell>
								<TableCell>false</TableCell>
								<TableCell>
									Enable placeholder styling
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>
		</div>
	);
}
