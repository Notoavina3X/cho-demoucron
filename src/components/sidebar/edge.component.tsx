import useFlowStore from "@/stores/flow.store";
import { Edge } from "reactflow";
import { Button } from "../ui/button";
import { useState } from "react";

type Props = {
	edge: Edge;
};

const EdgeComponent = ({ edge }: Props) => {
	const { customUpdateEdge } = useFlowStore();
	const [value, setValue] = useState<string | number>(edge.data?.label ?? "");

	const handleLabelChange = (newLabel: number) => {
		customUpdateEdge(
			{ ...edge, data: { ...edge.data, label: newLabel } },
			{
				source: edge.source,
				target: edge.target,
				sourceHandle: null,
				targetHandle: null,
			}
		);
	};

	const handleIncrement = () => {
		setValue((value) => Number(value) + 1);
		handleLabelChange(Number(value) + 1);
	};

	const handleDecrement = () => {
		if (Number(value) - 1 < 0) return;

		setValue((value) => Number(value) - 1);
		handleLabelChange(Number(value) - 1);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		handleLabelChange(Number(e.target.value));
	};

	return (
		<div
			id={edge.id}
			className="px-3 py-2 rounded flex justify-between items-center bg-slate-50"
		>
			<span className="font-bold text-xs">
				{edge.source} → {edge.target} :
			</span>
			<div className="flex gap-1">
				<Button
					size={"icon"}
					className="w-6 h-6"
					onClick={handleDecrement}
					disabled={value === 0}
				>
					-
				</Button>
				<input
					type="number"
					className="font-semibold text-xs bg-transparent max-w-[4ch] text-center outline-none"
					min={0}
					value={value}
					onChange={handleChange}
				/>
				<Button
					size={"icon"}
					className="w-6 h-6"
					onClick={handleIncrement}
				>
					+
				</Button>
			</div>
		</div>
	);
};

export default EdgeComponent;
