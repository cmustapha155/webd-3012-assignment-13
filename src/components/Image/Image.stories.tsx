import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

// Meta object containing component metadata
const meta: Meta<typeof Image> = {
	title: "Image",
	component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

// Stories
export const Primary: Story = {
	args: {
		alt: "Zenshuu",
		src: "https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp",
		maxWidth: "",
		smallScreenMaxWidth: "",
		className: "",
		id: "",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		alt: "Zenshuu",
		src: "https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp",
		maxWidth: "",
		smallScreenMaxWidth: "",
		className: "",
		id: "",
		disabled: true,
	},
};

export const ChangeWidth: Story = {
	args: {
		alt: "Zenshuu",
		src: "https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp",
		maxWidth: "30%",
		smallScreenMaxWidth: "30%",
		className: "",
		id: "",
		disabled: false,
	},
};
