export interface TextProps {
	text?: string;
	className?: string;
	id?: string;

	textColor?: string;

	type?: "body" | "heading" | "subheading";
	align?: "left" | "center" | "right" | "justify";
	disabled?: boolean;
}
