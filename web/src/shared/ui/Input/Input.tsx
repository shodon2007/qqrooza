import { type InputHTMLAttributes, type FC } from "react";
import cls from "./Input.module.scss";
import clsx from "clsx";

export enum ThemeInput {
	CLEAR = "clear",
	DEFAULT = "",
	PRIMARY = "primary",
}

export enum WidthInput {
	FULL = "fullWidth",
	DEFAULT = "maxContentWidth",
}

type InputProps = {
	className?: string;
	theme?: ThemeInput;
	width?: WidthInput;
	isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
	const {
		className,
		theme = ThemeInput.DEFAULT,
		width = WidthInput.DEFAULT,
		isError,
		...otherProps
	} = props;

	return (
		<input
			className={clsx(
				cls.Input,
				className,
				cls[theme],
				cls[width],
				isError ? cls.error : null,
			)}
			{...otherProps}
		/>
	);
};

export default Input;
