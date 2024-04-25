import { cn } from "@/lib/utils";

type Props = {
	data: number[][];
	oldData: number[][] | undefined;
	titles: string[];
	k: number;
};

const TableComponent = ({ data, oldData, titles, k }: Props) => {
	return (
		<div className="max-w-lg overflow-x-scroll">
			<table>
				<thead>
					<tr>
						<th></th>
						{titles.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							<th className="p-1">{titles[index]}</th>
							{row.map((cell, colIndex) => (
								<td
									key={colIndex}
									className={cn(
										"border text-center px-3",
										oldData &&
											cell != oldData[index][colIndex] &&
											"text-yellow-400"
									)}
								>
									{cell === Infinity ? "+∞" : cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
				<caption className="caption-bottom">
					Matrice D<sub>{k}</sub>
				</caption>
			</table>
		</div>
	);
};

export default TableComponent;
