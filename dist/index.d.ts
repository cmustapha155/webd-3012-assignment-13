import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    className?: string;
    id?: string;
    hoverBackgroundColor?: string;
    type: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

declare const Button: React.FC<ButtonProps>;

interface LabelProps {
    text?: string;
    className?: string;
    id?: string;
    textColor?: string;
    htmlFor?: string;
    disabled?: boolean;
}

declare const Label: React.FC<LabelProps>;

interface TextProps {
    text?: string;
    className?: string;
    id?: string;
    textColor?: string;
    type?: "body" | "heading" | "subheading";
    align?: "left" | "center" | "right" | "justify";
    disabled?: boolean;
}

declare const Text: React.FC<TextProps>;

interface TableProps {
    heading1: string;
    heading2?: string;
    heading3?: string;
    data1?: string;
    data2?: string;
    data3?: string;
    data4?: string;
    data5?: string;
    data6?: string;
    data7?: string;
    data8?: string;
    data9?: string;
    footer1?: string;
    footer2?: string;
    footer3?: string;
    headingBackgroundColor?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
}

declare const Table: React.FC<TableProps>;

interface DropdownProps {
    name: string;
    option1: string;
    option2?: string;
    option3?: string;
    value1: string;
    value2?: string;
    value3?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
}

declare const Dropdown: React.FC<DropdownProps>;

interface RadioButtonProps {
    name: string;
    value: string;
    buttonColor?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
}

declare const RadioButton: React.FC<RadioButtonProps>;

interface ImageProps {
    alt: string;
    src: string;
    maxWidth?: string;
    smallScreenMaxWidth?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
}

declare const Image: React.FC<ImageProps>;

interface HeroImageProps {
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

declare const HeroImage: React.FC<HeroImageProps>;

interface CardProps {
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

declare const Card: React.FC<CardProps>;

export { Button, type ButtonProps, Card, type CardProps, Dropdown, type DropdownProps, HeroImage, type HeroImageProps, Image, type ImageProps, Label, type LabelProps, RadioButton, type RadioButtonProps, Table, type TableProps, Text, type TextProps };
