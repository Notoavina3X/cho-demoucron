import { create } from "zustand";
import {
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
	addEdge,
	OnNodesChange,
	OnEdgesChange,
	OnConnect,
	applyNodeChanges,
	applyEdgeChanges,
	updateEdge,
} from "reactflow";

export type RFState = {
	nodes: Node[];
	edges: Edge[];
	onNodesChange: OnNodesChange;
	onEdgesChange: OnEdgesChange;
	onConnect: OnConnect;
	onEdgeUpdate: (oldEdge: Edge, newConnection: Connection) => void;
	addNode: (node: Node) => void;
	editNodeLabel: (id: string, name: string) => void;
	addEdge: (edge: Edge) => void;
	customUpdateEdge: (oldEdge: Edge, newConnection: Connection) => void;
	updateNodesColor: (pathNodes: Node[]) => void;
	resetGraph: () => void;
};

const useFlowStore = create<RFState>((set, get) => ({
	nodes: [] as Node[],
	edges: [] as Edge[],
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		});
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
	},
	onConnect: (connection: Connection) => {
		set({
			edges: addEdge(connection, get().edges),
		});
	},
	onEdgeUpdate: (oldEdge, newConnection) => {
		set({
			edges: updateEdge(oldEdge, newConnection, get().edges),
		});
	},
	addNode: (node) => {
		set({
			nodes: [...get().nodes, node],
		});
	},
	editNodeLabel: (id, name) => {
		set({
			nodes: get().nodes.map((node) => {
				if (node.id === id) {
					return {
						...node,
						data: {
							...node.data,
							label: name,
						},
					};
				}
				return node;
			}),
		});
	},
	addEdge: (edge) => {
		set({
			edges: [...get().edges, edge],
		});
	},
	customUpdateEdge: (oldEdge, newConnection) => {
		set({
			edges: updateEdge(oldEdge, newConnection, get().edges),
		});
	},
	updateNodesColor: (pathNodes) => {
		set({
			nodes: get().nodes.map((node) => {
				if (pathNodes.some((pathNode) => pathNode.id === node.id)) {
					node.style = {
						...node.style,
						backgroundColor: "#ffd900",
						border: "1px solid #ffd900",
					};
				} else {
					node.style = {
						...node.style,
						backgroundColor: "#fff",
						border: "1px solid #000",
					};
				}
				return node;
			}),
		});
	},
	resetGraph: () => {
		set({
			nodes: [],
		});
		set({
			edges: [],
		});
	},
}));

export default useFlowStore;
