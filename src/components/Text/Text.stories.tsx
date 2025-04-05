import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

// Meta object containing component metadata
const meta: Meta<typeof Text> = {
	title: "Text",
	component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

// Stories
export const Primary: Story = {
	args: {
		text: "Are we playing to win and to establish the technical supremacy we need to keep up with what the business needs, or do we just keep limping along, shackled to things built decades ago, and tell our business leadership to throw in the towel and stop having good ideas?",
		className: "body-text",
		id: "",
		textColor: "",
		// type: "body",
		// align: "left",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		text: "Are we playing to win and to establish the technical supremacy we need to keep up with what the business needs, or do we just keep limping along, shackled to things built decades ago, and tell our business leadership to throw in the towel and stop having good ideas?",
		className: "body-text",
		id: "",
		textColor: "",
		// type: "body",
		// align: "left",
		disabled: true,
	},
};

export const Heading: Story = {
	args: {
		text: "Heading Text",
		className: "headings",
		id: "heading-1",
		textColor: "#3284ad",
		type: "heading",
		align: "center",
		disabled: false,
	},
};

export const Subheading: Story = {
	args: {
		text: "Subheading text",
		className: "subheadings",
		id: "subheading-1",
		textColor: "#4c5172",
		type: "subheading",
		align: "center",
		disabled: false,
	},
};
