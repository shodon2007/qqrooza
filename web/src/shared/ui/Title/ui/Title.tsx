import clsx from "clsx";
import { HTMLProps } from "react";
import cls from "./Title.module.scss";

interface TitleProps extends HTMLProps<HTMLDivElement> {
	className?: string;
}
export const Title = ({ className, children, ...props }: TitleProps) => {
	return (
		<div className={clsx(cls.title, className)} {...props}>
			{children}
		</div>
	);
};
