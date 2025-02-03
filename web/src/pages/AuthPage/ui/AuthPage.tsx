import { useUnit } from "effector-react";
import cls from "./AuthPage.module.scss";
import { AuthForm } from "widgets/Auth/AuthForm";
import { $userStore } from "entities/user";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

const AuthPage = () => {
	const userStore = useUnit($userStore);
	const navigate = useNavigate();
	if (userStore.isAuth) {
		navigate(RoutePath.main);
	}
	return (
		<div className={cls.authPage}>
			<AuthForm />
		</div>
	);
};

export default AuthPage;
