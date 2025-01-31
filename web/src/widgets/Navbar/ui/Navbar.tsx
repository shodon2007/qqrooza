import { useState, type FC } from "react";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Menu, type MenuProps } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

type NavbarProps = {
    className?: string;
};
type NavbarLinkType = Required<MenuProps>["items"][number];

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation();
    const curPage = useParams();
    console.log(curPage);
    const [current, setCurrent] = useState();

    const navbarLinks: NavbarLinkType[] = [
        {
            label: "Список текстов",
            key: "/texts",
            icon: <OrderedListOutlined />,
        },
    ];
    return "hello";
    // return (
    //     <Menu
    //         onClick={(e) => console.log("hello", e)}
    //         selectedKeys={[current]}
    //     />
    // );
};

export default Navbar;
