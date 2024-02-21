import { Node } from "reactflow";
import { Badge } from "../ui/badge";
import useFlowStore from "@/stores/flow.store";
import { useEffect, useState } from "react";

const NodeComponent = ({ id, type, data: { label } }: Node) => {
	const { editNodeLabel } = useFlowStore();
	const [value, setValue] = useState<string>(label);

	const handleEditLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleOnBlur = () => {
		if (!value) setValue(label);
	};

	useEffect(() => {
		if (value) editNodeLabel(id, value);
	}, [value, editNodeLabel, id]);
	return (
		<div className="px-3 py-2 rounded flex justify-between items-center bg-slate-50">
			<input
				className="font-semibold text-xs w-[100px] p-1 bg-transparent outline-none focus:border-b-2 focus:border-b-black"
				value={value}
				onBlur={handleOnBlur}
				onChange={handleEditLabel}
				maxLength={17}
			/>
			{type && (
				<Badge>
					{type === "input" ? "entrée" : type === "output" ? "sortie" : ""}
				</Badge>
			)}
		</div>
	);
};

export default NodeComponent;
