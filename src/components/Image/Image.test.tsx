import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "./Image";

describe(Image, () => {
	// test 1
	test("Image component renders and is visible", () => {
		render(
			<Image
				alt="Zenshuu"
				src="https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp"
			/>,
		);

		const image = screen.getByRole("img");
		expect(image).toBeInTheDocument();
		expect(image).toBeVisible();
	});

	// test 2
	test("Image styling changes in disabled state", () => {
		render(
			<Image
				alt="Zenshuu"
				disabled={true}
				src="https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp"
			/>,
		);

		const image = screen.getByRole("img");
		expect(image).toHaveStyle("opacity: 0.3");
	});
});
