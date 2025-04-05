import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

describe(Dropdown, () => {
	// test 1
	test("Dropdown component renders and is visible", () => {
		render(<Dropdown name="car-make" option1="Mazda" value1="mazda" />);

		const dropdown = screen.getByRole("combobox"); // combobox = ARIA <select>
		expect(dropdown).toBeInTheDocument();
		expect(dropdown).toBeVisible();
	});

	// test 2
	test("Dropdown styling changes in disabled state", () => {
		render(
			<Dropdown
				name="car-make"
				option1="Toyota"
				value1="toyota"
				disabled={true}
			/>,
		);

		const dropdown = screen.getByRole("combobox");
		expect(dropdown).toBeDisabled();
	});
});
