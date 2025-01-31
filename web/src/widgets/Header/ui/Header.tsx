import { type FC } from "react";
import clsx from "clsx";

import cls from "./Header.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "widgets/LangSwitcher";

type HeaderProps = {
    className?: string;
};

const Header: FC<HeaderProps> = () => {
    return (
        <div className={clsx(cls.Header)}>
            <AppLink className={cls.link} to={"/"}>
                QQROOZA
            </AppLink>
            <LangSwitcher />
        </div>
    );
};

export default Header;
