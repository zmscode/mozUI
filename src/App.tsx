import "./index.css";
import { Button } from "./components/ui/Button";
import { Badge } from "./components/ui/Badge";
import { Icon } from "./components/utility/Icon";
import { Range } from "./components/ui/Range";
import { Radio } from "./components/ui/Radio";
import { Toggle } from "./components/ui/Toggle";
import { Avatar, AvatarGroup } from "./components/ui/Avatar";

function App() {
	return (
		<div className="p-10 space-y-12 bg-base-100 min-h-screen text-base-content">
			<div className="space-y-6">
				<h1 className="text-3xl font-bold">
					Button Component Examples
				</h1>

				{/* Button Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2">
					Button Component
				</h2>

				{/* Color Variants */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors (Solid)</h3>
					<div className="flex flex-wrap gap-3">
						<Button color="default">Default</Button>
						<Button color="primary">Primary</Button>
						<Button color="secondary">Secondary</Button>
						<Button color="accent">Accent</Button>
						<Button color="neutral">Neutral</Button>
						<Button color="info">Info</Button>
						<Button color="success">Success</Button>
						<Button color="warning">Warning</Button>
						<Button color="error">Error</Button>
					</div>
				</section>

				{/* Style Variants with Primary Color */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">
						Variants (Primary Color)
					</h2>
					<div className="flex flex-wrap gap-3">
						<Button color="primary" variant="solid">
							Solid
						</Button>
						<Button color="primary" variant="ghost">
							Ghost
						</Button>
						<Button color="primary" variant="outline">
							Outline
						</Button>
						<Button color="primary" variant="dash">
							Dash
						</Button>
						<Button color="primary" variant="link">
							Link
						</Button>
						<Button color="primary" variant="soft">
							Soft
						</Button>
					</div>
				</section>

				{/* Sizes */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">Sizes</h2>
					<div className="flex flex-wrap items-center gap-3">
						<Button color="primary" size="xs">
							Extra Small
						</Button>
						<Button color="primary" size="sm">
							Small
						</Button>
						<Button color="primary" size="md">
							Medium
						</Button>
						<Button color="primary" size="lg">
							Large
						</Button>
						<Button color="primary" size="xl">
							Extra Large
						</Button>
					</div>
				</section>

				{/* Shapes */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">Shapes</h2>
					<div className="flex flex-wrap items-center gap-3">
						<Button color="primary">Default</Button>
						<Button color="primary" shape="square">
							■
						</Button>
						<Button color="primary" shape="circle">
							●
						</Button>
					</div>
				</section>

				{/* Widths */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">Widths</h2>
					<div className="space-y-3">
						<Button color="primary">Default Width</Button>
						<Button color="primary" width="wide">
							Wide Button
						</Button>
						<Button color="primary" width="block">
							Block Button
						</Button>
					</div>
				</section>

				{/* States */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">States</h2>
					<div className="flex flex-wrap gap-3">
						<Button color="primary">Normal</Button>
						<Button color="primary" disabled>
							Disabled
						</Button>
					</div>
				</section>

				{/* Color + Variant Combinations */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">
						Color × Variant Matrix
					</h2>
					<div className="space-y-3">
						<div className="flex flex-wrap gap-2">
							<Button color="success" variant="solid">
								Success Solid
							</Button>
							<Button color="success" variant="outline">
								Success Outline
							</Button>
							<Button color="success" variant="ghost">
								Success Ghost
							</Button>
							<Button color="success" variant="dash">
								Success Dash
							</Button>
							<Button color="success" variant="soft">
								Success Soft
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button color="error" variant="solid">
								Error Solid
							</Button>
							<Button color="error" variant="outline">
								Error Outline
							</Button>
							<Button color="error" variant="ghost">
								Error Ghost
							</Button>
							<Button color="error" variant="dash">
								Error Dash
							</Button>
							<Button color="error" variant="soft">
								Error Soft
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button color="warning" variant="solid">
								Warning Solid
							</Button>
							<Button color="warning" variant="outline">
								Warning Outline
							</Button>
							<Button color="warning" variant="ghost">
								Warning Ghost
							</Button>
							<Button color="warning" variant="dash">
								Warning Dash
							</Button>
							<Button color="warning" variant="soft">
								Warning Soft
							</Button>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button color="info" variant="solid">
								Info Solid
							</Button>
							<Button color="info" variant="outline">
								Info Outline
							</Button>
							<Button color="info" variant="ghost">
								Info Ghost
							</Button>
							<Button color="info" variant="dash">
								Info Dash
							</Button>
							<Button color="info" variant="soft">
								Info Soft
							</Button>
						</div>
					</div>
				</section>

				{/* Complex Combinations */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold">
						Complex Combinations
					</h2>
					<div className="flex flex-wrap gap-3">
						<Button color="success" variant="solid" size="lg">
							Large Success
						</Button>
						<Button
							color="error"
							variant="outline"
							size="sm"
							shape="square"
						>
							✕
						</Button>
						<Button color="info" variant="ghost" size="xs">
							Tiny Info Ghost
						</Button>
						<Button color="warning" variant="soft" size="xl">
							XL Warning Soft
						</Button>
						<Button color="accent" variant="dash" size="md">
							Accent Dash
						</Button>
					</div>
				</section>

				{/* Icons with Buttons (using icon prop) */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Buttons with Icon Props
					</h3>
					<div className="flex flex-wrap gap-3">
						<Button color="primary" icon="plus">
							Add Item
						</Button>
						<Button color="error" variant="outline" icon="trash">
							Delete
						</Button>
						<Button
							color="success"
							variant="soft"
							icon="check-circle"
						>
							Confirm
						</Button>
						<Button
							color="info"
							variant="ghost"
							iconEnd="arrow-right"
						>
							Continue
						</Button>
						<Button
							color="warning"
							icon="download-simple"
							iconEnd="check"
						>
							Download & Verify
						</Button>
					</div>
				</section>

				{/* Icon-only Buttons (auto circle) */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Icon-Only Buttons (Auto Circle)
					</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Button color="primary" icon="plus" />
						<Button color="error" variant="outline" icon="x" />
						<Button color="success" variant="soft" icon="check" />
						<Button color="info" variant="ghost" icon="heart" />
						<Button color="primary" icon="gear" size="lg" />
						<Button color="secondary" icon="bell" size="sm" />
					</div>
				</section>

				{/* Badge Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Badge Component
				</h2>

				{/* Badge Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors (Solid)</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="default">Default</Badge>
						<Badge color="primary">Primary</Badge>
						<Badge color="secondary">Secondary</Badge>
						<Badge color="accent">Accent</Badge>
						<Badge color="neutral">Neutral</Badge>
						<Badge color="info">Info</Badge>
						<Badge color="success">Success</Badge>
						<Badge color="warning">Warning</Badge>
						<Badge color="error">Error</Badge>
					</div>
				</section>

				{/* Badge Variants */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Variants (Primary Color)
					</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="primary" variant="solid">
							Solid
						</Badge>
						<Badge color="primary" variant="outline">
							Outline
						</Badge>
						<Badge color="primary" variant="dash">
							Dash
						</Badge>
						<Badge color="primary" variant="soft">
							Soft
						</Badge>
						<Badge variant="ghost">Ghost</Badge>
					</div>
				</section>

				{/* Badge Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="primary" size="xs">
							XS
						</Badge>
						<Badge color="primary" size="sm">
							Small
						</Badge>
						<Badge color="primary" size="md">
							Medium
						</Badge>
						<Badge color="primary" size="lg">
							Large
						</Badge>
						<Badge color="primary" size="xl">
							XL
						</Badge>
					</div>
				</section>

				{/* Badge Matrix */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Color × Variant Matrix
					</h3>
					<div className="space-y-3">
						<div className="flex flex-wrap gap-2 items-center">
							<Badge color="success" variant="solid">
								Success
							</Badge>
							<Badge color="success" variant="outline">
								Success
							</Badge>
							<Badge color="success" variant="dash">
								Success
							</Badge>
							<Badge color="success" variant="soft">
								Success
							</Badge>
						</div>
						<div className="flex flex-wrap gap-2 items-center">
							<Badge color="error" variant="solid">
								Error
							</Badge>
							<Badge color="error" variant="outline">
								Error
							</Badge>
							<Badge color="error" variant="dash">
								Error
							</Badge>
							<Badge color="error" variant="soft">
								Error
							</Badge>
						</div>
						<div className="flex flex-wrap gap-2 items-center">
							<Badge color="warning" variant="solid">
								Warning
							</Badge>
							<Badge color="warning" variant="outline">
								Warning
							</Badge>
							<Badge color="warning" variant="dash">
								Warning
							</Badge>
							<Badge color="warning" variant="soft">
								Warning
							</Badge>
						</div>
					</div>
				</section>

				{/* Badge with Icons/Content */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">With Content</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="primary" icon="circle">
							Online
						</Badge>
						<Badge color="success" variant="soft" icon="check">
							Verified
						</Badge>
						<Badge color="error" variant="outline" icon="warning">
							Alert
						</Badge>
						<Badge color="info" size="lg" icon="arrow-right">
							New Feature
						</Badge>
					</div>
				</section>

				{/* Badges with Icon Props */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Badges with Icon Props
					</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="primary" icon="circle">
							Online
						</Badge>
						<Badge color="success" variant="soft" icon="check">
							Verified
						</Badge>
						<Badge color="error" variant="outline" icon="warning">
							Alert
						</Badge>
						<Badge color="info" icon="info">
							Info
						</Badge>
						<Badge color="warning" iconEnd="x">
							Dismissable
						</Badge>
						<Badge
							color="primary"
							icon="star"
							iconEnd="arrow-right"
						>
							Premium
						</Badge>
					</div>
				</section>

				{/* Icon-only Badges */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Icon-Only Badges</h3>
					<div className="flex flex-wrap gap-3 items-center">
						<Badge color="primary" icon="heart" />
						<Badge color="success" variant="outline" icon="check" />
						<Badge color="error" variant="soft" icon="x" />
						<Badge color="warning" icon="bell" size="lg" />
						<Badge color="info" icon="star" size="sm" />
					</div>
				</section>

				{/* Icon Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Icon Component
				</h2>

				{/* Basic Icons */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Basic Icons</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Icon icon="user-circle" size={32} />
						<Icon icon="heart" size={32} />
						<Icon icon="star" size={32} />
						<Icon icon="bell" size={32} />
						<Icon icon="gear" size={32} />
						<Icon icon="house" size={32} />
						<Icon icon="check" size={32} />
						<Icon icon="x" size={32} />
					</div>
				</section>

				{/* Icon Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Icon icon="heart" size={16} />
						<Icon icon="heart" size={24} />
						<Icon icon="heart" size={32} />
						<Icon icon="heart" size={48} />
						<Icon icon="heart" size={64} />
					</div>
				</section>

				{/* Icon Weights */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Weights</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Icon icon="star" size={32} weight="thin" />
						<Icon icon="star" size={32} weight="light" />
						<Icon icon="star" size={32} weight="regular" />
						<Icon icon="star" size={32} weight="bold" />
						<Icon icon="star" size={32} weight="fill" />
					</div>
				</section>

				{/* Icon Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Icon icon="heart" size={32} color="primary" />
						<Icon icon="star" size={32} color="secondary" />
						<Icon icon="check" size={32} color="success" />
						<Icon icon="info" size={32} color="info" />
						<Icon icon="warning" size={32} color="warning" />
						<Icon icon="x-circle" size={32} color="error" />
						<Icon icon="gear" size={32} color="accent" />
						<Icon icon="user" size={32} color="neutral" />
					</div>
				</section>

				{/* Icon Custom Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Custom Colors (Hex)
					</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Icon icon="heart" size={32} color="#ef4444" />
						<Icon icon="star" size={32} color="#f59e0b" />
						<Icon icon="check" size={32} color="#10b981" />
						<Icon icon="info" size={32} color="#3b82f6" />
						<Icon icon="warning" size={32} color="#f59e0b" />
					</div>
				</section>

				{/* Range Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Range Component
				</h2>

				{/* Range Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors</h3>
					<div className="space-y-4">
						<Range color="default" defaultValue={50} />
						<Range color="primary" defaultValue={50} />
						<Range color="secondary" defaultValue={50} />
						<Range color="accent" defaultValue={50} />
						<Range color="neutral" defaultValue={50} />
						<Range color="info" defaultValue={50} />
						<Range color="success" defaultValue={50} />
						<Range color="warning" defaultValue={50} />
						<Range color="error" defaultValue={50} />
					</div>
				</section>

				{/* Range Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="space-y-4">
						<Range color="primary" size="xs" defaultValue={50} />
						<Range color="primary" size="sm" defaultValue={50} />
						<Range color="primary" size="md" defaultValue={50} />
						<Range color="primary" size="lg" defaultValue={50} />
						<Range color="primary" size="xl" defaultValue={50} />
					</div>
				</section>

				{/* Range States */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">States</h3>
					<div className="space-y-4">
						<Range color="primary" defaultValue={50} />
						<Range color="primary" defaultValue={50} disabled />
					</div>
				</section>

				{/* Range with Min/Max/Step */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Custom Min/Max/Step
					</h3>
					<div className="space-y-4">
						<div>
							<div className="block text-sm mb-2">
								Range 0-100 (step 10)
							</div>
							<Range
								color="primary"
								min={0}
								max={100}
								step={10}
								defaultValue={50}
							/>
						</div>
						<div>
							<div className="block text-sm mb-2">
								Range 0-10 (step 0.5)
							</div>
							<Range
								color="success"
								min={0}
								max={10}
								step={0.5}
								defaultValue={5}
							/>
						</div>
					</div>
				</section>

				{/* Radio Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Radio Component
				</h2>

				{/* Radio Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Radio
							color="default"
							defaultChecked
							name="radio-colors-1"
						/>
						<Radio color="primary" name="radio-colors-2" />
						<Radio color="secondary" name="radio-colors-3" />
						<Radio color="accent" name="radio-colors-4" />
						<Radio color="neutral" name="radio-colors-5" />
						<Radio color="info" name="radio-colors-6" />
						<Radio color="success" name="radio-colors-7" />
						<Radio color="warning" name="radio-colors-8" />
						<Radio color="error" name="radio-colors-9" />
					</div>
				</section>

				{/* Radio Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Radio color="primary" size="xs" name="radio-sizes-1" />
						<Radio color="primary" size="sm" name="radio-sizes-2" />
						<Radio
							color="primary"
							size="md"
							defaultChecked
							name="radio-sizes-3"
						/>
						<Radio color="primary" size="lg" name="radio-sizes-4" />
						<Radio color="primary" size="xl" name="radio-sizes-5" />
					</div>
				</section>

				{/* Radio States */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">States</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Radio color="primary" name="radio-states-1" />
						<Radio
							color="primary"
							defaultChecked
							name="radio-states-2"
						/>
						<Radio color="primary" disabled name="radio-states-3" />
						<Radio
							color="primary"
							disabled
							defaultChecked
							name="radio-states-4"
						/>
					</div>
				</section>

				{/* Radio Groups */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Radio Groups</h3>
					<div className="space-y-4">
						<div className="space-y-2">
							<div className="text-sm font-medium">
								Choose an option:
							</div>
							<div className="flex flex-col gap-2">
								<label
									htmlFor="option-1"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="option-1"
										color="primary"
										name="radio-group-1"
										defaultChecked
									/>
									<span>Option 1</span>
								</label>
								<label
									htmlFor="option-2"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="option-2"
										color="primary"
										name="radio-group-1"
									/>
									<span>Option 2</span>
								</label>
								<label
									htmlFor="option-3"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="option-3"
										color="primary"
										name="radio-group-1"
									/>
									<span>Option 3</span>
								</label>
							</div>
						</div>

						<div className="space-y-2">
							<div className="text-sm font-medium">
								Choose a plan:
							</div>
							<div className="flex flex-col gap-2">
								<label
									htmlFor="plan-free"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="plan-free"
										color="success"
										size="lg"
										name="radio-group-2"
									/>
									<span className="flex flex-col">
										<span className="font-semibold">
											Free
										</span>
										<span className="text-sm opacity-70">
											Basic features
										</span>
									</span>
								</label>
								<label
									htmlFor="plan-pro"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="plan-pro"
										color="success"
										size="lg"
										name="radio-group-2"
										defaultChecked
									/>
									<span className="flex flex-col">
										<span className="font-semibold">
											Pro
										</span>
										<span className="text-sm opacity-70">
											All features included
										</span>
									</span>
								</label>
								<label
									htmlFor="plan-enterprise"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="plan-enterprise"
										color="success"
										size="lg"
										name="radio-group-2"
									/>
									<span className="flex flex-col">
										<span className="font-semibold">
											Enterprise
										</span>
										<span className="text-sm opacity-70">
											Custom solutions
										</span>
									</span>
								</label>
							</div>
						</div>
					</div>
				</section>

				{/* Radio Horizontal Groups */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Horizontal Groups</h3>
					<div className="space-y-4">
						<div className="space-y-2">
							<div className="text-sm font-medium">Size:</div>
							<div className="flex gap-4">
								<label
									htmlFor="size-s"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="size-s"
										color="accent"
										name="radio-horizontal-1"
									/>
									<span>S</span>
								</label>
								<label
									htmlFor="size-m"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="size-m"
										color="accent"
										name="radio-horizontal-1"
										defaultChecked
									/>
									<span>M</span>
								</label>
								<label
									htmlFor="size-l"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="size-l"
										color="accent"
										name="radio-horizontal-1"
									/>
									<span>L</span>
								</label>
								<label
									htmlFor="size-xl"
									className="flex items-center gap-2 cursor-pointer"
								>
									<Radio
										id="size-xl"
										color="accent"
										name="radio-horizontal-1"
									/>
									<span>XL</span>
								</label>
							</div>
						</div>
					</div>
				</section>

				{/* Toggle Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Toggle Component
				</h2>

				{/* Toggle Colors */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Colors</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Toggle color="default" defaultChecked />
						<Toggle color="primary" defaultChecked />
						<Toggle color="secondary" defaultChecked />
						<Toggle color="accent" defaultChecked />
						<Toggle color="neutral" defaultChecked />
						<Toggle color="info" defaultChecked />
						<Toggle color="success" defaultChecked />
						<Toggle color="warning" defaultChecked />
						<Toggle color="error" defaultChecked />
					</div>
				</section>

				{/* Toggle Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Toggle color="primary" size="xs" defaultChecked />
						<Toggle color="primary" size="sm" defaultChecked />
						<Toggle color="primary" size="md" defaultChecked />
						<Toggle color="primary" size="lg" defaultChecked />
						<Toggle color="primary" size="xl" defaultChecked />
					</div>
				</section>

				{/* Toggle States */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">States</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Toggle color="primary" />
						<Toggle color="primary" defaultChecked />
						<Toggle color="primary" disabled />
						<Toggle color="primary" disabled defaultChecked />
					</div>
				</section>

				{/* Toggle with Labels */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">With Labels</h3>
					<div className="space-y-4">
						<label
							htmlFor="toggle-1"
							className="flex items-center gap-3 cursor-pointer w-fit"
						>
							<Toggle id="toggle-1" color="primary" />
							<span>Enable notifications</span>
						</label>
						<label
							htmlFor="toggle-2"
							className="flex items-center gap-3 cursor-pointer w-fit"
						>
							<Toggle
								id="toggle-2"
								color="success"
								defaultChecked
							/>
							<span>Auto-save enabled</span>
						</label>
						<label
							htmlFor="toggle-3"
							className="flex items-center gap-3 cursor-pointer w-fit"
						>
							<Toggle id="toggle-3" color="info" />
							<span>Dark mode</span>
						</label>
						<label
							htmlFor="toggle-4"
							className="flex items-center gap-3 cursor-pointer w-fit"
						>
							<Toggle id="toggle-4" color="warning" disabled />
							<span>Premium feature (disabled)</span>
						</label>
					</div>
				</section>

				{/* Toggle Settings Example */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Settings Example</h3>
					<div className="space-y-3 max-w-md">
						<div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
							<div>
								<div className="font-medium">
									Email Notifications
								</div>
								<div className="text-sm opacity-70">
									Receive updates via email
								</div>
							</div>
							<Toggle color="primary" defaultChecked />
						</div>
						<div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
							<div>
								<div className="font-medium">
									Push Notifications
								</div>
								<div className="text-sm opacity-70">
									Get notified on your device
								</div>
							</div>
							<Toggle color="primary" />
						</div>
						<div className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
							<div>
								<div className="font-medium">
									SMS Notifications
								</div>
								<div className="text-sm opacity-70">
									Receive text messages
								</div>
							</div>
							<Toggle color="primary" />
						</div>
					</div>
				</section>

				{/* Avatar Section */}
				<h2 className="text-2xl font-bold border-b border-base-300 pb-2 mt-16">
					Avatar Component
				</h2>

				{/* Avatar Sizes */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Sizes</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Avatar
							size="xs"
							src="https://i.pravatar.cc/150?img=1"
						/>
						<Avatar
							size="sm"
							src="https://i.pravatar.cc/150?img=2"
						/>
						<Avatar
							size="md"
							src="https://i.pravatar.cc/150?img=3"
						/>
						<Avatar
							size="lg"
							src="https://i.pravatar.cc/150?img=4"
						/>
						<Avatar
							size="xl"
							src="https://i.pravatar.cc/150?img=5"
						/>
					</div>
				</section>

				{/* Avatar Presence */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Presence Indicators
					</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Avatar
							src="https://i.pravatar.cc/150?img=6"
							presence="online"
						/>
						<Avatar
							src="https://i.pravatar.cc/150?img=7"
							presence="offline"
						/>
						<Avatar
							src="https://i.pravatar.cc/150?img=8"
							presence="away"
						/>
						<Avatar
							src="https://i.pravatar.cc/150?img=9"
							presence="busy"
						/>
					</div>
				</section>

				{/* Avatar Placeholder */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">
						Placeholder (No Image)
					</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Avatar size="xs" />
						<Avatar size="sm" />
						<Avatar size="md" />
						<Avatar size="lg" />
						<Avatar size="xl" />
					</div>
				</section>

				{/* Avatar with Custom Fallback */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Custom Fallback</h3>
					<div className="flex flex-wrap gap-4 items-center">
						<Avatar size="md" fallback="JD" />
						<Avatar size="md" fallback="AB" />
						<Avatar size="md" fallback="XY" />
						<Avatar
							size="lg"
							fallback={<Icon icon="user" size={32} />}
						/>
					</div>
				</section>

				{/* Avatar Groups */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Avatar Groups</h3>
					<div className="space-y-4">
						<div>
							<div className="text-sm mb-2">Small Group</div>
							<AvatarGroup size="sm">
								<Avatar src="https://i.pravatar.cc/150?img=10" />
								<Avatar src="https://i.pravatar.cc/150?img=11" />
								<Avatar src="https://i.pravatar.cc/150?img=12" />
								<Avatar src="https://i.pravatar.cc/150?img=13" />
							</AvatarGroup>
						</div>
						<div>
							<div className="text-sm mb-2">Medium Group</div>
							<AvatarGroup size="md">
								<Avatar src="https://i.pravatar.cc/150?img=14" />
								<Avatar src="https://i.pravatar.cc/150?img=15" />
								<Avatar src="https://i.pravatar.cc/150?img=16" />
								<Avatar src="https://i.pravatar.cc/150?img=17" />
								<Avatar src="https://i.pravatar.cc/150?img=18" />
							</AvatarGroup>
						</div>
						<div>
							<div className="text-sm mb-2">Large Group</div>
							<AvatarGroup size="lg">
								<Avatar src="https://i.pravatar.cc/150?img=19" />
								<Avatar src="https://i.pravatar.cc/150?img=20" />
								<Avatar src="https://i.pravatar.cc/150?img=21" />
							</AvatarGroup>
						</div>
					</div>
				</section>

				{/* Avatar Use Cases */}
				<section className="space-y-4">
					<h3 className="text-xl font-semibold">Use Cases</h3>
					<div className="space-y-4 max-w-md">
						<div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
							<Avatar
								src="https://i.pravatar.cc/150?img=26"
								presence="online"
								size="lg"
							/>
							<div>
								<div className="font-semibold">John Doe</div>
								<div className="text-sm opacity-70">
									Active now
								</div>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
							<Avatar
								src="https://i.pravatar.cc/150?img=27"
								presence="away"
								size="lg"
							/>
							<div>
								<div className="font-semibold">Jane Smith</div>
								<div className="text-sm opacity-70">Away</div>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
							<Avatar fallback="AB" size="lg" />
							<div>
								<div className="font-semibold">Alice Brown</div>
								<div className="text-sm opacity-70">
									No profile picture
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
