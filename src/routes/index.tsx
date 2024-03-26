import { Button } from "@/components/ui/button";
import { _EDGES, _NODES } from "@/lib/constants";
import useFlowStore from "@/stores/flow.store";
import { createFileRoute } from "@tanstack/react-router";
import { LightbulbIcon } from "lucide-react";

function Index() {
	const addNode = useFlowStore((state) => state.addNode);
	const addEdge = useFlowStore((state) => state.addEdge);
	const resetGraph = useFlowStore((state) => state.resetGraph);

	const handleUseExemple = () => {
		resetGraph();
		_NODES.map((node) => addNode(node));
		_EDGES.map((edge) => addEdge(edge));
	};

	return (
		<div className="flex flex-col gap-5 items-center pr-4">
			<h1 className="text-4xl opacity-5 font-black mb-10">Demoucron</h1>
			<LightbulbIcon className="size-20 text-yellow-200" />
			<div className="flex w-2/3 items-baseline gap-2 border px-4 py-3 rounded-lg">
				<span className="text-lg font-bold">1.</span>
				<p className="font-medium text-slate-600">
					Commencez par ajouter un <strong>sommet</strong> en cliquant sur le
					bouton "+" dans la barre latérale.
				</p>
			</div>
			<div className="flex w-2/3 items-baseline gap-2 border px-4 py-3 rounded-lg">
				<span className="text-lg font-bold">2.</span>
				<p className="font-medium text-slate-600">
					Une fois plusieurs sommets créés, reliez-les par des{" "}
					<strong>arcs</strong> via les points noirs sur les sommets.
				</p>
			</div>
			<div className="flex w-2/3 items-baseline gap-2 border px-4 py-3 rounded-lg">
				<span className="text-lg font-bold">3.</span>
				<p className="font-medium text-slate-600">
					Donnez les valeurs respectives de ces arcs dans la liste.
				</p>
			</div>
			<Button
				size={"lg"}
				onClick={handleUseExemple}
				className="w-2/3"
			>
				Utiliser un exemple
			</Button>
		</div>
	);
}

export const Route = createFileRoute("/")({
	component: Index,
});
