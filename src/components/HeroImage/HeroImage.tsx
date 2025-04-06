import React from "react";
import { HeroImageProps } from "./HeroImage.types.ts";
import styled from "styled-components";
import { Button } from "../Button"
const StyledHeroImage = styled.div<HeroImageProps>`
	width: 100%;
  font-family: sans-serif;
  font-size: 1.5em;
  color: ${(props) => props.textColor || "#3284ad"};
  position: relative;

  img {
    display: block;
    filter: brightness(${(props) => props.imageBrightness || 1});
    width: 100%;
    object-fit: cover;
  }
  div {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* displace element from having the top left corner centered */
  }
	@media (max-width: 768px) {
		font-size: 0.5em
	}

  ${(props) =>
    props.disabled &&
    `
      opacity: 0.3;
      pointer-events: none;
      cursor: not-allowed;
      user-select: none;
  `}
`;

const HeroImage: React.FC<HeroImageProps> = (props) => {
  return (
    <StyledHeroImage
    imageAlt={props.imageAlt}
    imageSrc={props.imageSrc}
    imageBrightness={props.imageBrightness}

    heading={props.heading}
    subheading={props.subheading}
    textColor={props.textColor}

    buttonText={props.buttonText}

    className={props.className}
    id={props.id}
    disabled={props.disabled}
    role = "hero-image" // SET ROLE FOR TESTING
    >
      <img alt={props.imageAlt} src={props.imageSrc}></img>
      <div>
        <h1>{props.heading}</h1>
        <p>{props.subheading}</p>
        <Button type="button" text={props.buttonText} hoverBackgroundColor={props.textColor}></Button>
      </div>
    </StyledHeroImage>
  );
};

export default HeroImage;