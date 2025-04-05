import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

describe(Text, () => {
	// test 1
	test("Text component renders and is visible", () => {
		render(<Text text="Body text" type="body" />);

		const text = screen.getByText("Body text");
		expect(text).toBeInTheDocument();
		expect(text).toBeVisible();
	});

	// test 2
	test("Text styling changes in disabled state", () => {
		render(<Text text="Body text disabled" type="body" disabled={true} />);

		const text = screen.getByText("Body text disabled");
		// expect(text).toHaveAttribute("disabled", "true");
		expect(text).toHaveStyle("background-color: lightgrey");
		expect(text).toHaveStyle("color: grey");
	});
});
