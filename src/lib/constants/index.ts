import { Edge, Node } from "reactflow";

const _NODES = [
	{
		id: "1",
		type: "input",
		position: {
			x: -149.8708513535785,
			y: -41.37000441621224,
		},
		data: {
			label: "1",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: false,
		positionAbsolute: {
			x: -149.8708513535785,
			y: -41.37000441621224,
		},
		dragging: false,
	},
	{
		id: "2",
		position: {
			x: -58.93151413681551,
			y: -76.58229648691312,
		},
		data: {
			label: "2",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: false,
		positionAbsolute: {
			x: -58.93151413681551,
			y: -76.58229648691312,
		},
		dragging: false,
	},
	{
		id: "3",
		position: {
			x: 81.81249432085491,
			y: -20.704963620783104,
		},
		data: {
			label: "3",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: false,
		positionAbsolute: {
			x: 81.81249432085491,
			y: -20.704963620783104,
		},
		dragging: false,
	},
	{
		id: "4",
		position: {
			x: 21.04425568943944,
			y: 12.261816216885833,
		},
		data: {
			label: "4",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: true,
		positionAbsolute: {
			x: 21.04425568943944,
			y: 12.261816216885833,
		},
		dragging: false,
	},
	{
		id: "5",
		position: {
			x: 138.7398359728254,
			y: -56.160928822782594,
		},
		data: {
			label: "5",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: false,
		positionAbsolute: {
			x: 138.7398359728254,
			y: -56.160928822782594,
		},
		dragging: false,
	},
	{
		id: "6",
		type: "output",
		position: {
			x: 210.5480066565056,
			y: -19.758145941979656,
		},
		data: {
			label: "6",
		},
		style: {
			border: "1px solid #000",
			borderRadius: 100,
			maxWidth: "fit-content",
			display: "grid",
			placeItems: "center",
			aspectRatio: "1 / 1",
			lineHeight: "0.6",
		},
		sourcePosition: "right",
		targetPosition: "left",
		width: 28,
		height: 29,
		selected: false,
		positionAbsolute: {
			x: 210.5480066565056,
			y: -19.758145941979656,
		},
		dragging: false,
	},
] as Node[];

const _EDGES = [
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "1",
		sourceHandle: null,
		target: "2",
		targetHandle: null,
		data: {
			label: 3,
		},
		id: "reactflow__edge-1-2",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "1",
		sourceHandle: null,
		target: "3",
		targetHandle: null,
		data: {
			label: 8,
		},
		id: "reactflow__edge-1-3",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "1",
		sourceHandle: null,
		target: "4",
		targetHandle: null,
		data: {
			label: 6,
		},
		id: "reactflow__edge-1-4",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "2",
		sourceHandle: null,
		target: "4",
		targetHandle: null,
		data: {
			label: 2,
		},
		id: "reactflow__edge-2-4",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "2",
		sourceHandle: null,
		target: "5",
		targetHandle: null,
		data: {
			label: 6,
		},
		id: "reactflow__edge-2-5",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "3",
		sourceHandle: null,
		target: "5",
		targetHandle: null,
		data: {
			label: 1,
		},
		id: "reactflow__edge-3-5",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "4",
		sourceHandle: null,
		target: "3",
		targetHandle: null,
		data: {
			label: 2,
		},
		id: "reactflow__edge-4-3",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "4",
		sourceHandle: null,
		target: "6",
		targetHandle: null,
		data: {
			label: 7,
		},
		id: "reactflow__edge-4-6",
	},
	{
		type: "custom",
		style: {
			strokeWidth: 1,
			stroke: "black",
		},
		markerEnd: {
			type: "arrow",
			width: 20,
			height: 20,
			color: "#000",
		},
		source: "5",
		sourceHandle: null,
		target: "6",
		targetHandle: null,
		data: {
			label: 2,
		},
		id: "reactflow__edge-5-6",
	},
] as Edge[];

export { _NODES, _EDGES };
