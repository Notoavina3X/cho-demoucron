import { FC } from "react";
import {
	BaseEdge,
	EdgeLabelRenderer,
	EdgeProps,
	getBezierPath,
} from "reactflow";

const CustomEdge: FC<EdgeProps> = ({
	id,
	markerEnd,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	data,
	style,
}) => {
	const [edgePath, labelX, labelY] = getBezierPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});
	return (
		<>
			<BaseEdge
				id={id}
				path={edgePath}
				style={style}
				markerEnd={markerEnd}
			/>
			<EdgeLabelRenderer>
				<div
					style={{
						position: "absolute",
						transform: `translate(0%, 0%) translate(${labelX}px,${labelY}px)`,
						fontSize: 10,
						fontWeight: 700,
					}}
					className="nodrag nopan"
				>
					{data?.label || " "}
				</div>
			</EdgeLabelRenderer>
		</>
	);
};

export default CustomEdge;
