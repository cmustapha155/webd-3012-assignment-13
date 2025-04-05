import React from "react";
import { RadioButtonProps } from "./RadioButton.types.ts";
import styled from "styled-components";

const StyledRadioButton = styled.input<RadioButtonProps>`
	font-size: 1em;
	font-family: sans-serif;
	margin: 10px;

	@media (max-width: 768px) {
    margin: 15px;
	}

	&:hover {
		cursor: ${(props) => !props.disabled && "pointer"};
	}
  &:checked {
    accent-color: ${(props) => props.buttonColor || "#3284ad"};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <StyledRadioButton type="radio"
    name = {props.name}
    value = {props.value}
    buttonColor = {props.buttonColor}
    disabled = {props.disabled}
    className= {props.className}
    id= {props.id}
    >
    </StyledRadioButton>
  );
};

export default RadioButton;