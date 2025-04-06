import React from "react";
import { CardProps } from "./Card.types.ts";
import styled from "styled-components";

const StyledCard = styled.div<CardProps>`
	font-size: 1em;
	font-family: sans-serif;
	text-align: ${(props) => props.align || "left"};

	border: 1.5px solid lightgrey;
	border-top: 5px solid  ${(props) => props.accentColor || "#3284ad"};
	border-radius: 3px;
	padding: 20px;
	width: 25%;

	img {
		background-color: lightblue;
		width: 100%;
		height: 200px;
		border-radius: 3px;
		object-fit: cover;
		opacity: ${(props) => props.disabled ? "0.3" : "1.0"};
	}

	color: ${(props) =>
		props.disabled ? "grey" : props.textColor || "inherit"};
	${(props) => props.disabled && `background-color: lightgrey;`}

	@media (max-width: 768px) {
		width: 60%;
		img {
			height: 140px;
		}
	}
`;

const Card: React.FC<CardProps> = (props) => {
	return (
		<StyledCard
			heading={props.heading}
			align={props.align}
			textColor={props.textColor}
			accentColor={props.accentColor}
			className={props.className}
			id={props.id}
			disabled={props.disabled}
			role = "card" // DEFINE ROLE FOR TESTING
		>
			<img alt="card image" src={props.imageSrc}/>
			<h3>{props.heading}</h3>
			<p>{props.description}</p>
		</StyledCard>
	);
};

export default Card;
