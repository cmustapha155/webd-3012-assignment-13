export interface HeroImageProps {
	imageAlt: string;
	imageSrc: string;
	imageBrightness?: number;

	heading?: string;
	subheading?: string;
	textColor?: string;

	buttonText?: string;

	className?: string;
	id?: string;
	disabled?: boolean;
}
