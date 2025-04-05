import React from "react";
import { TextProps } from "./Text.types.ts";
import styled from "styled-components";

// initially set as styled.text. You must use a valid HTML element
// in this case, the div tag works well as it doesn't apply default stylings, like the padding of a <p> tag
const StyledText = styled.div<TextProps>`
	font-size: 1em;
	font-family: sans-serif;
	color: ${(props) =>
		props.disabled ? "grey" : props.textColor || "inherit"};
	${(props) => props.disabled && `background-color: lightgrey;`}

	${(props) => {
		switch (props.type) {
			case "heading":
				return `
          font-size: 2em;
          font-weight: 1000;
        `;
			case "subheading":
				return `
          font-size: 1.5em;
          font-weight: 700;
        `;
			case "body":
			default:
				return `
          font-size: 1em;
          line-height: 1.6;
        `;
		}
	}}

	text-align: ${(props) => props.align || "left"};

	padding: 10px;

	@media (max-width: 768px) {
		padding: 5px;
	}
`;

const Text: React.FC<TextProps> = (props) => {
	return (
		<StyledText
			className={props.className}
			id={props.id}
			textColor={props.textColor}
			type={props.type}
			align={props.align}
			disabled={props.disabled}
		>
			{props.text}
		</StyledText>
	);
};

export default Text;
