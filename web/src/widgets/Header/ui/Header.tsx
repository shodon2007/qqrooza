import { type FC } from "react";
import clsx from "clsx";

import cls from "./Header.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Navbar } from "widgets/Navbar";
import { useUnit } from "effector-react";
import { $userStore } from "entities/user";

type HeaderProps = {
	className?: string;
};

const Header: FC<HeaderProps> = () => {
	const userStore = useUnit($userStore);

	return (
		<div className={clsx(cls.Header)}>
			<AppLink className={cls.link} to={"/"}>
				QQROOZA
			</AppLink>
			{userStore.isAuth ? (
				<div className={cls.center}>
					<Navbar />
				</div>
			) : null}
			<div className={cls.right}>
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Header;
