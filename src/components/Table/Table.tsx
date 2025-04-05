import React from "react";
import { TableProps } from "./Table.types.ts";
import styled from "styled-components";

const StyledTable = styled.table<TableProps>`
	font-size: 1em;
	font-family: sans-serif;

	color: ${(props) =>
		props.disabled ? "grey" : "inherit"};
	${(props) => props.disabled && `background-color: lightgrey;`}

	thead {
	background-color: ${(props) => props.disabled? "lightgrey" : props.headingBackgroundColor || "#d7d7d7"}
	}
	td, th {
		padding: 10px;
		border: 2px solid black;
	}

	border-collapse: collapse;
	padding: 10px;

	@media (max-width: 768px) {
		padding: 5px;
	}
`;

const Table: React.FC<TableProps> = (props) => {
	return (
		<StyledTable
			heading1={props.heading1}
			heading2={props.heading2}
			heading3={props.heading3}
			data1={props.data1}
			data2={props.data2}
			data3={props.data3}
			data4={props.data4}
			data5={props.data5}
			data6={props.data6}
			data7={props.data7}
			data8={props.data8}
			data9={props.data9}
			footer1={props.footer1}
			footer2={props.footer2}
			footer3={props.footer3}
			headingBackgroundColor={props.headingBackgroundColor}
			className={props.className}
			id={props.id}
			disabled={props.disabled}
		>
			<thead>
				<tr>
					<th>{props.heading1}</th>
					<th>{props.heading2}</th>
					<th>{props.heading3}</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>{props.data1}</td>
					<td>{props.data2}</td>
					<td>{props.data3}</td>
				</tr>
				<tr>
					<td>{props.data4}</td>
					<td>{props.data5}</td>
					<td>{props.data6}</td>
				</tr>
				<tr>
					<td>{props.data7}</td>
					<td>{props.data8}</td>
					<td>{props.data9}</td>
				</tr>
			</tbody>

			<tfoot>
				<tr>
					<td>{props.footer1}</td>
					<td>{props.footer2}</td>
					<td>{props.footer3}</td>
				</tr>
			</tfoot>
		</StyledTable>
	);
};

// dynamic table sizing. without dynamic data population
// const Table: React.FC<TableProps> = ({ rows, cols, ...restProps }) => {
//   const tableRows = Array.from({ length: rows }, (_, rowIndex) => (
//     <tr key={rowIndex}>
//       {Array.from({ length: cols }, (_, colIndex) => (
//         <td key={colIndex}>Row {rowIndex + 1}, Col {colIndex + 1}</td>
//       ))}
//     </tr>
//   ));

//   return (
//     <StyledTable
// 			rows={rows}
// 			cols={cols}
// 			className={restProps.className}
// 			id={restProps.id}
// 			disabled={restProps.disabled}
// 		>
//       <tbody>{tableRows}</tbody>
//     </StyledTable>
//   );
// };

export default Table;
