import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

// Meta object containing component metadata
const meta: Meta<typeof RadioButton> = {
	title: "RadioButton",
	component: RadioButton,
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

// Stories
export const Primary: Story = {
	args: {
		name: "radio-option-1",
		value: "1",
		className: "radio",
		id: "",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		name: "radio-option-1",
		value: "1",
		className: "radio",
		id: "",
		disabled: true,
	},
};

export const PurpleGrey: Story = {
	args: {
		name: "radio-option-1",
		value: "1",
		className: "radio",
		id: "",
		disabled: false,
		buttonColor: "#4c5172",
	},
};
