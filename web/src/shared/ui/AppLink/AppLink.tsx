import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";
import cls from "./AppLink.module.scss";
import clsx from "clsx";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type AppLinkProps = {
    className?: string;
    theme?: AppLinkTheme;
} & LinkProps;
const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            className={clsx(cls.AppLink, className ?? "", cls[theme])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
