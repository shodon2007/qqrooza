import { type FC, ReactElement } from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import clsx from "clsx";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

type NavbarProps = {
	className?: string;
};
interface NavbarItem {
	label: string;
	key: string;
	icon: ReactElement;
}

const Navbar: FC<NavbarProps> = () => {
	const curPath = useLocation().pathname;
	const navigate = useNavigate();

	const navbarLinks: NavbarItem[] = [
		{
			label: "Список текстов",
			key: RoutePath.texts,
			icon: <OrderedListOutlined />,
		},
		{
			label: "Список юзеров",
			key: RoutePath.users,
			icon: <OrderedListOutlined />,
		},
	];

	return (
		<div className={cls.Navbar}>
			{navbarLinks.map((el) => {
				return (
					<Button
						key={el.key}
						className={clsx(
							cls.navbarButton,
							el.key === curPath ? cls.selectedButton : false,
						)}
						theme={ThemeButton.CLEAR}
						onClick={() => navigate(el.key)}
					>
						{el.label}
					</Button>
				);
			})}
		</div>
	);
};

export default Navbar;
