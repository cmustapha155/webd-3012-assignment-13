import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroImage from "./HeroImage";

describe(HeroImage, () => {

	// Note: tests generate warnings due to mapping of non existent html attributes (which the component requires) to the corresponding html element

	// test 1
	test("HeroImage component renders and is visible", () => {
		render(
			<HeroImage
				imageAlt="Zenshuu"
				imageSrc="https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp"
			/>,
		);

		const heroImage = screen.getByRole("hero-image");
		expect(heroImage).toBeInTheDocument();
		expect(heroImage).toBeVisible();
	});

	// // test 2
	test("HeroImage styling changes in disabled state", () => {
		render(
			<HeroImage
				disabled={true}
				imageAlt="Zenshuu"
				imageSrc="https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp"
			/>,
		);

		const heroImage = screen.getByRole("hero-image");
		expect(heroImage).toHaveStyle("opacity: 0.3");
	});
});
