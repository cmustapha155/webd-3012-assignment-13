export interface CardProps {
	heading: string;
	description?: string;
	align?: "left" | "center" | "right" | "justify";

	imageSrc?: string;
	textColor?: string;
	accentColor?: string;

	className?: string;
	id?: string;
	disabled?: boolean;
}
