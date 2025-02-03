import { type ButtonHTMLAttributes, type FC } from "react";
import cls from "./Button.module.scss";
import clsx from "clsx";

export enum ThemeButton {
	CLEAR = "clear",
	DEFAULT = "",
	PRIMARY = "primary",
}

export enum WidthButton {
	FULL = "fullWidth",
	DEFAULT = "maxContentWidth",
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
	width?: WidthButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.DEFAULT,
		width = WidthButton.DEFAULT,
		...otherProps
	} = props;

	return (
		<button
			type="button"
			className={clsx(cls.Button, className, cls[theme], cls[width])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
