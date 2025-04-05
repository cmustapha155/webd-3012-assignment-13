import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

// Meta object containing component metadata
const meta: Meta<typeof Table> = {
	title: "Table",
	component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

// Stories
export const Primary: Story = {
	args: {
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		// row 1
		data1: "A 1",
		data2: "A 2",
		data3: "A 3",
		// row 2
		data4: "B 1",
		data5: "B 2",
		data6: "B 3",
		// row 3
		data7: "C 1",
		data8: "C 2",
		data9: "C 3",
		// footer
		footer1: "Data 1",
		footer2: "Data 2",
		footer3: "Data 3",

		className: "simple-table",
		id: "",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		data1: "A 1",
		data2: "A 2",
		data3: "A 3",
		data4: "B 1",
		data5: "B 2",
		data6: "B 3",
		data7: "C 1",
		data8: "C 2",
		data9: "C 3",
		footer1: "Data 1",
		footer2: "Data 2",
		footer3: "Data 3",
		className: "simple-table",
		id: "",
		disabled: true,
		headingBackgroundColor: "#dbe3ea",
	},
};

export const UnusedCells: Story = {
	args: {
		heading1: "Heading 1",
		data1: "A 1",
		data2: "A 2",
		data8: "C 2",
		footer3: "Data 3",
		className: "simple-table",
		id: "",
		disabled: false,
	},
};
