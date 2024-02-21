import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useCallback, useState } from "react";
import useFlowStore from "@/stores/flow.store";
import { Node } from "reactflow";

const AddNode = () => {
	const { nodes, addNode } = useFlowStore();

	const [nodeName, setNodeName] = useState("");
	const [isOutput, setIsOutput] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	const handleSubmit = useCallback(() => {
		const latestNodeId =
			nodes.length > 0 ? nodes[nodes.length - 1].id : nodes.length;
		const id = (Number(latestNodeId) + 1).toString();
		const newNode = {
			id,
			type: nodes.length === 0 ? "input" : isOutput ? "output" : undefined,
			position: {
				x: Math.random() * 100,
				y: Math.random() * 100,
			},
			data: {
				label: nodeName || id,
			},
			style: {
				border: "1px solid black",
				borderRadius: 100,
				maxWidth: "fit-content",
				display: "grid",
				placeItems: "center",
				aspectRatio: "1 / 1",
				lineHeight: "0.6" /* May need to adjust */,
			},
			sourcePosition: "right",
			targetPosition: "left",
		} as Node;

		try {
			addNode(newNode);
			setNodeName("");
			setIsOutput(false);
			setIsCreating(false);
		} catch (error) {
			console.error(error);
		}
	}, [addNode, nodes, isOutput, nodeName]);

	return (
		<Popover
			open={isCreating}
			onOpenChange={setIsCreating}
		>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="w-8 h-8"
				>
					<Plus className="w-4 h-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Ajout d'un sommet</h4>
						<p className="text-sm text-muted-foreground">
							Entrer le nom du sommet
						</p>
					</div>
					<div className="grid gap-3">
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="name">Nom</Label>
							<Input
								id="name"
								className="h-8 col-span-2"
								value={nodeName}
								onChange={(e) => setNodeName(e.target.value)}
								placeholder="(id) par défaut"
							/>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="output">Sortie</Label>
							<Switch
								id="output"
								checked={isOutput}
								onCheckedChange={setIsOutput}
							/>
						</div>
					</div>
					<div className="flex justify-end">
						<Button
							size={"sm"}
							onClick={handleSubmit}
						>
							Continuer
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default AddNode;
