import type { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImage";

// Meta object containing component metadata
const meta: Meta<typeof HeroImage> = {
	title: "HeroImage",
	component: HeroImage,
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

// Stories
export const Primary: Story = {
	args: {
		imageAlt: "city",
		imageSrc:
			"https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		imageBrightness: 0.6,

		heading: "The quick brown fox",
		subheading: "Jumps over the lazy dog",
		textColor: "#eaba27",

		buttonText: "More Info",

		className: "",
		id: "main-banner",
		disabled: false,
	},
};

export const Secondary: Story = {
	args: {
		imageAlt: "Zenshuu",
		imageSrc:
			"https://defeatzone.com/wp-content/uploads/2024/03/MAPPA-Studio-revela-novo-anime-original-Zenshu-dirigido-por-Mitsue-Yamasaki-1600x900.webp",
		imageBrightness: 0.4,

		heading: "Zenshuu.",
		subheading: "The anime about an anime animator",
		textColor: "#6f59f1",

		buttonText: "More Info",

		className: "",
		id: "main-banner",
		disabled: true,
	},
};
