import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

// Meta object containing component metadata
const meta: Meta<typeof Dropdown> = {
	title: "Dropdown",
	component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Stories
export const Primary: Story = {
	args: {
		name: "select-options",
		option1: "Option 1",
		option2: "Option 2",
		option3: "Option 3",
		value1: "1",
		value2: "2",
		value3: "3",
		className: "dropdown",
		id: "",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		name: "select-options",
		option1: "Option 1",
		option2: "Option 2",
		option3: "Option 3",
		value1: "1",
		value2: "2",
		value3: "3",
		className: "dropdown",
		id: "",
		disabled: true,
	},
};
