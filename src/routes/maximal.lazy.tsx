import TableComponent from "@/components/table.component";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	getPathIndexes,
	getMatrixN,
	setMatrix1,
	Explanation,
} from "@/lib/maximal/utils.maximal";
import {
	extractNodesJoined,
	getPathEdges,
	getPathNodes,
	verifyEdgeLabel,
	verifyNodesOutput,
} from "@/lib/utils";
import useFlowStore from "@/stores/flow.store";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { MarkerType } from "reactflow";

const Maximal = () => {
	const nodes = useFlowStore((state) => state.nodes);
	const edges = useFlowStore((state) => state.edges);
	const updateNodesColor = useFlowStore((state) => state.updateNodesColor);
	const customUpdateEdge = useFlowStore((state) => state.customUpdateEdge);
	const [matrixN, setMatrixN] = useState<number[][][]>([]);
	const [explanations, setExplanations] = useState<Explanation[]>([]);
	const [titles, setTitles] = useState<string[]>([]);
	const [calculable, setCalculable] = useState<boolean>(false);

	const handleCalculate = useCallback(() => {
		setMatrixN([]);
		setExplanations([]);
		const extractedNodes = extractNodesJoined(nodes, edges);
		const _tempMatrixN: number[][][] = [];
		const nodeLabels: string[] = extractedNodes.map((obj) => obj.data.label);

		_tempMatrixN.push(setMatrix1(extractedNodes, edges));

		for (let i = 1; i < extractedNodes.length - 1; i++) {
			const newMatrix = getMatrixN(_tempMatrixN[i - 1], nodeLabels, i);
			setExplanations((prevExp) => [...prevExp, ...newMatrix.explanations]);
			_tempMatrixN.push(newMatrix.matrix);
		}

		setMatrixN(_tempMatrixN);
		setTitles(nodeLabels);

		const pathIndexes = getPathIndexes(
			_tempMatrixN[0],
			_tempMatrixN[_tempMatrixN.length - 1]
		);
		const pathNodes = getPathNodes(pathIndexes, extractedNodes);
		const pathEdges = getPathEdges(pathIndexes, extractedNodes, edges);

		// console.log(pathIndexes, pathNodes, pathEdges);

		updateNodesColor(pathNodes);

		edges.map((edge) => {
			const isPathEdge = pathEdges.includes(edge);
			const newStyle = {
				...edge.style,
				stroke: isPathEdge ? "#ffd900" : "#000",
			};
			const newMarkerEnd = {
				type: MarkerType.Arrow,
				width: 20,
				height: 20,
				color: isPathEdge ? "#ffd900" : "#000",
			};

			customUpdateEdge(
				{
					...edge,
					style: newStyle,
					markerEnd: newMarkerEnd,
				},
				{
					source: edge.source,
					target: edge.target,
					sourceHandle: null,
					targetHandle: null,
				}
			);
		});
	}, [nodes, edges, updateNodesColor, customUpdateEdge]);

	useEffect(() => {
		if (verifyEdgeLabel(edges) && verifyNodesOutput(edges).length === 1) {
			setCalculable(true);
		} else {
			setMatrixN([]);
			setCalculable(false);
		}
	}, [nodes, edges]);

	return (
		<div className="flex flex-col p-5 gap-4 h-screen">
			<section>
				<h2 className="font-bold text-lg">
					1 - Poser W<sub>ij</sub>
					<sup>(1)</sup> = V
					<sub>
						(x<sub>i</sub>, x<sub>j</sub>)
					</sub>{" "}
					si (x<sub>i</sub>, x<sub>j</sub>) ∈ U sinon W<sub>ij</sub>
					<sup>(1)</sup> = 0
				</h2>
				<h2 className="font-bold text-lg">
					2 - Mettre les valeurs dans une matrice de dimension n x n, D
					<sub>1</sub>
				</h2>
				<h2 className="font-bold text-lg flex">
					3 -
					<span className="ml-1">
						Calculer W<sub>ij</sub>
						<sup>(k-1)</sup> = V<sub>ik</sub>
						<sup>(k-1)</sup> + V<sub>kj</sub>
						<sup>(k-1)</sup>, puis V<sub>ij</sub>
						<sup>(k)</sup> = max[W<sub>ij</sub>
						<sup>(k-1)</sup>, V<sub>ij</sub>
						<sup>(k-1)</sup>]. <br />
						Former la matrice Dk. <br />
						Arrêter dès que k = n - 1
					</span>
				</h2>
			</section>
			<hr />
			<Button
				disabled={!calculable}
				onClick={handleCalculate}
				className="w-full"
			>
				Procéder
			</Button>
			{calculable && (
				<ScrollArea className="w-full pr-3">
					{matrixN.map((matrix, index) => (
						<div
							key={index}
							className="w-full my-5 border p-3 rounded-lg"
						>
							<h2 className="font-bold text-lg mb-5">
								{index + 1 !== 1 ? (
									`pour k = ${index + 1}`
								) : (
									<>
										Présentation de la matrice D<sub>{index + 1}</sub>
									</>
								)}
							</h2>
							<div className="space-y-5">
								{index > 0 && (
									<div>
										{explanations
											.filter(
												(explanation) => explanation.mid === String(index + 1)
											)
											.map((explanation, i) => (
												<p
													key={i}
													className="text-sm flex gap-3"
												>
													<span>
														W<sub>{explanation.input + explanation.output}</sub>
														<sup>({index})</sup> = V
														<sub>{explanation.input + explanation.mid}</sub>
														<sup>({index})</sup> + V
														<sub>{explanation.mid + explanation.output}</sub>
														<sup>({index})</sup> = {explanation.vik} +{" "}
														{explanation.vkj} = {explanation.w},
													</span>
													<span>
														V<sub>{explanation.input + explanation.output}</sub>
														<sup>({index + 1})</sup> = max[W
														<sub>{explanation.input + explanation.output}</sub>
														<sup>({index})</sup>, V
														<sub>{explanation.input + explanation.output}</sub>
														<sup>({index})</sup>] = max[{explanation.w},{" "}
														{explanation.vij1}] ={" "}
														<span className="text-yellow-400 font-semibold">
															{explanation.vij2}
														</span>
														.
													</span>
												</p>
											))}
									</div>
								)}
								<TableComponent
									data={matrix}
									oldData={matrixN[index - 1]}
									titles={titles}
									k={index + 1}
								/>
							</div>
						</div>
					))}
				</ScrollArea>
			)}
		</div>
	);
};

export const Route = createLazyFileRoute("/maximal")({
	component: Maximal,
});
