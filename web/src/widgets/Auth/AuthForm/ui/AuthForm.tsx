import { useTranslation } from "react-i18next";
import type { FormInstance, FormProps } from "antd";
import { Form } from "antd";

import Button, { ThemeButton, WidthButton } from "shared/ui/Button/Button";
import Input, { ThemeInput, WidthInput } from "shared/ui/Input/Input";

import cls from "./AuthForm.module.scss";
import { userAuth } from "features/auth/userAuth";
import { useUnit } from "effector-react";
import { $userStore } from "entities/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AuthFormFields } from "entities/auth";
import Text from "shared/ui/Text";
import Title from "shared/ui/Title";

const AuthForm = () => {
	const { t } = useTranslation("auth");
	const navigate = useNavigate();
	const userStore = useUnit($userStore);

	useEffect(() => {
		if (userStore.isAuth) {
			navigate(RoutePath.main);
		}
	}, [userStore]);

	const onFinish: FormProps<AuthFormFields>["onFinish"] = (values) => {
		userAuth(values);
	};

	return (
		<Form name={"basic"} className={cls.form} onFinish={onFinish}>
			<div className={cls.headerSection}>
				<Title>{t("заголовок")}</Title>
				<Text className={cls.description}>{t("описание")}</Text>
			</div>

			<div className={cls.buttonsSection}>
				<Form.Item<AuthFormFields>
					rules={[
						{
							required: true,
							message: t("введите_логин"),
						},
					]}
					label={null}
					name="username"
				>
					<Input
						width={WidthInput.FULL}
						placeholder={t("поле_логин")}
					/>
				</Form.Item>

				<Form.Item<AuthFormFields>
					rules={[
						{
							required: true,
							message: t("введите_пароль"),
						},
					]}
					label={null}
					name="password"
				>
					<Input
						width={WidthInput.FULL}
						type={"password"}
						placeholder={t("поле_пароль")}
					/>
				</Form.Item>
				<Button
					type="submit"
					theme={ThemeButton.PRIMARY}
					width={WidthButton.FULL}
				>
					{t("кнопка_авторизации")}
				</Button>
			</div>
		</Form>
	);
};

export default AuthForm;
