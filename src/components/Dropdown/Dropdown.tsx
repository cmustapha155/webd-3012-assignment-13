import React from "react";
import { DropdownProps } from "./Dropdown.types.ts";
import styled from "styled-components";

const StyledDropdown = styled.select<DropdownProps>`
	font-size: 1em;
	font-family: sans-serif;
	padding: 10px 35px 10px 35px;

	background-color: white;
	border: 1.5px solid lightgrey;
	border-radius: 3px;

	@media (max-width: 768px) {
		padding: 5px 17.5px 5px 17.5px;
	}

	&:hover {
		cursor: ${(props) => !props.disabled && "pointer"};
	}
`;

const Dropdown: React.FC<DropdownProps> = (props) => {
	return (
		<StyledDropdown
			name={props.name}
			option1={props.option1}
			option2={props.option2}
			option3={props.option3}
			value1={props.value1}
			value2={props.value2}
			value3={props.value3}
			id={props.id}
			disabled={props.disabled}
		>
			<option value={props.value1}>{props.option1}</option>
			<option value={props.value2}>{props.option2}</option>
			<option value={props.value3}>{props.option3}</option>
		</StyledDropdown>
	);
};

export default Dropdown;
