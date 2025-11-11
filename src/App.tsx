import { Code, CodeLine } from "./components/custom/code/Code";

function App() {
	return (
		<div className="p-10 space-y-8">
			<h3 className="text-xl font-semibold">Multi-line</h3>
			<Code className="w-full">
				<CodeLine prefix="$">npm i daisyui</CodeLine>
				<CodeLine prefix=">" className="text-warning">
					installing...
				</CodeLine>
				<CodeLine prefix=">" className="text-success">
					Done!
				</CodeLine>
			</Code>
		</div>
	);
}

export default App;
