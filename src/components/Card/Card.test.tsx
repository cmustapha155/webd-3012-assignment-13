import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe(Card, () => {
	// test 1
	test("Card component renders and is visible", () => {
		render(<Card heading="Card 1" />);

		const card = screen.getByRole("card");
		expect(card).toBeInTheDocument();
		expect(card).toBeVisible();
	});

	// test 2
	test("Card styling changes in disabled state", () => {
		render(<Card heading="Card 1" disabled={true} />);

		const card = screen.getByRole("card");
		expect(card).toHaveStyle("background-color: lightgrey");
		expect(card).toHaveStyle("color: grey");
	});
});
