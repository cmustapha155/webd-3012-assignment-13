import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

// Meta object containing component metadata
const meta: Meta<typeof Card> = {
	title: "Card",
	component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

// Stories
export const Primary: Story = {
	args: {
		heading: "Unicorn",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		align: "left",
		imageSrc:
			"https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD-620x412.jpg",
		textColor: "",
		accentColor: "#aaa632",
		className: "card",
		id: "",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		heading: "Unicorn",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		align: "left",
		imageSrc:
			"https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD-620x412.jpg",
		textColor: "",
		accentColor: "",
		className: "card",
		id: "",
		disabled: true,
	},
};
