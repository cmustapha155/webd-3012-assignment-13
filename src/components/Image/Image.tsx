import React from "react";
import { ImageProps } from "./Image.types.ts";
import styled from "styled-components";

const StyledImage = styled.img<ImageProps>`
	max-width: ${(props) => props.maxWidth || "50%"};

	margin: 10px;

	@media (max-width: 768px) {
		max-width: ${(props) => props.smallScreenMaxWidth || "75%"};
	}

	${(props) =>
		props.disabled &&
		`
      opacity: 0.3;
      pointer-events: none;
      cursor: not-allowed;
  `}
`;

const Image: React.FC<ImageProps> = (props) => {
	return (
		<StyledImage
			alt={props.alt}
			src={props.src}
			maxWidth={props.maxWidth}
			smallScreenMaxWidth={props.smallScreenMaxWidth}
			className={props.className}
			id={props.id}
			disabled={props.disabled}
		></StyledImage>
	);
};

export default Image;
