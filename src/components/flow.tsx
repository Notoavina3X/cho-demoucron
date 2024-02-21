import useFlowStore from "@/stores/flow.store";
import ReactFlow, {
	Controls,
	Background,
	MarkerType,
	EdgeTypes,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomEdge from "./custome-edge";

function Flow() {
	const {
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		onEdgeUpdate,
	} = useFlowStore();

	const edgeTypes: EdgeTypes = {
		custom: CustomEdge,
	};

	const defaultEdgeOptions = {
		type: "custom",
		style: { strokeWidth: 1, stroke: "black" },
		markerEnd: { type: MarkerType.Arrow, width: 20, height: 20, color: "#000" },
	};

	return (
		<div className="h-full border-r">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onEdgeUpdate={onEdgeUpdate}
				defaultEdgeOptions={defaultEdgeOptions}
				edgeTypes={edgeTypes}
				fitView
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default Flow;
