import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButton from "./RadioButton";

describe(RadioButton, () => {
	// test 1
	test("RadioButton component renders and is visible", () => {
		render(<RadioButton name="school" value="rrc" />);

		const radioButton = screen.getByRole("radio");
		expect(radioButton).toBeInTheDocument();
		expect(radioButton).toBeVisible();
	});

	// test 2
	test("RadioButton styling changes in disabled state", () => {
		render(<RadioButton name="school" value="rrc" disabled={true} />);

		const radioButton = screen.getByRole("radio");
		expect(radioButton).toBeDisabled();
	});
});
