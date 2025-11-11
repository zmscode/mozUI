import { Badge } from "./components/ui/badge/Badge";
import {
	Card,
	CardActions,
	CardBody,
	CardTitle,
} from "./components/ui/card/Card";

function App() {
	return (
		<div className="p-10 space-y-8">
			<h3 className="text-xl font-semibold">With Badge</h3>
			<Card className="w-96 bg-base-100 shadow-sm">
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
						alt="Shoes"
					/>
				</figure>
				<CardBody>
					<CardTitle>
						Card Title
						<Badge color="secondary">NEW</Badge>
					</CardTitle>
					<p>
						A card component has a figure, a body part, and inside
						body there are title and actions parts
					</p>
					<CardActions className="justify-end">
						<Badge style="outline">Fashion</Badge>
						<Badge style="outline">Products</Badge>
					</CardActions>
				</CardBody>
			</Card>
		</div>
	);
}

export default App;
