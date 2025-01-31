import { type HTMLProps } from "react";
import cls from "./Text.module.scss";
import clsx from "clsx";

interface TextProps extends HTMLProps<HTMLDivElement> {
	className?: string;
}
const Text = ({ children, className, ...props }: TextProps) => {
	return (
		<div
			className={clsx(cls.text, className ? className : null)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Text;
