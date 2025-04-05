import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

describe(Text, () => {
	// test 1
	test("Table component renders and is visible", () => {
		render(<Table heading1="Heading 1" />);

		const table = screen.getByRole("table");
		expect(table).toBeInTheDocument();
		expect(table).toBeVisible();
	});

	// test 2
	test("Table styling changes in disabled state", () => {
		render(<Table heading1="Heading 1" disabled={true} />);

		const table = screen.getByRole("table");
		expect(table).toHaveStyle("background-color: lightgrey");
		expect(table).toHaveStyle("color: grey");
	});
});
