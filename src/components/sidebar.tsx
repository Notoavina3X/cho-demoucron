import { useNavigate } from "@tanstack/react-router";
import AddNode from "./sidebar/add-node.component";
import useFlowStore from "@/stores/flow.store";
import NodeComponent from "./sidebar/node.component";
import EdgeComponent from "./sidebar/edge.component";
import { Button } from "./ui/button";
import { HelpCircle, RotateCcw, TrendingDown, TrendingUp } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { _NODES, _EDGES } from "../lib/constants";

const Sidebar = () => {
	const navigate = useNavigate();
	const nodes = useFlowStore((state) => state.nodes);
	const edges = useFlowStore((state) => state.edges);
	const resetGraph = useFlowStore((state) => state.resetGraph);
	const addNode = useFlowStore((state) => state.addNode);
	const addEdge = useFlowStore((state) => state.addEdge);
	const handleNavigation = (value: "minimal" | "maximal") => {
		navigate({ to: `/${value}` });
	};

	const handleUseExemple = () => {
		resetGraph();
		_NODES.map((node) => addNode(node));
		_EDGES.map((edge) => addEdge(edge));
	};

	return (
		<aside className="flex flex-col h-screen gap-5 p-6 pr-2 border-r justify-between overflow-hidden">
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-bold">Eléments du graphe</h3>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<HelpCircle size={17} />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel className="max-w-sm">
							Commencez par ajouter un <strong>sommet</strong> en cliquant sur
							le bouton "+" ci-dessous. Une fois plusieurs sommets créés,
							reliez-les par des <strong>arcs</strong> via les points noirs sur
							les sommets, et donnez leurs valeurs respectives dans la liste des
							arcs.
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<div className="flex justify-end p-2">
							<Button
								size={"sm"}
								onClick={handleUseExemple}
							>
								Voir exemple
							</Button>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<ScrollArea className="pr-3">
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<label className="font-semibold">Sommets</label>
						<AddNode />
					</div>
					<div className="flex flex-col gap-1">
						{nodes.map((node) => (
							<NodeComponent
								key={node.id}
								id={node.id}
								position={node.position}
								type={node.type}
								data={node.data}
							/>
						))}
					</div>
				</div>
				<hr />
				<div className="flex flex-col gap-2">
					<label className="font-semibold">Arcs</label>
					<div className="flex flex-col gap-1">
						{edges
							.sort((a, b) => {
								// Comparaison des propriétés "source"
								const sourceComparison =
									parseInt(a.source) - parseInt(b.source);

								// Si les "source" sont égales, alors comparer les "target"
								return sourceComparison === 0
									? parseInt(a.target) - parseInt(b.target)
									: sourceComparison;
							})
							.map((edge) => (
								<EdgeComponent
									key={edge.id}
									edge={edge}
								/>
							))}
					</div>
				</div>
			</ScrollArea>

			<div className="flex gap-4 py-4">
				<Button
					variant={"outline"}
					size={"icon"}
					onClick={() => resetGraph()}
				>
					<RotateCcw size={16} />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Trouver le chemin</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => handleNavigation("minimal")}>
							<TrendingDown className="mr-2 h-4 w-4" />
							<span>Chemin Minimal</span>
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleNavigation("maximal")}>
							<TrendingUp className="mr-2 h-4 w-4" />
							<span>Chemin Maximal</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</aside>
	);
};

export default Sidebar;
