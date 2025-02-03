/*
    namespaces:
        LS - localStorage
*/

import { AuthFormFields } from "entities/auth";
import { updateUser } from "entities/user";
import loginUserAndGetTokens from "./utils/loginUserAndGetTokens";
import { updateUserLS } from "./utils/updateUserStorage";

interface AuthError {
	message: string;
}

const userAuth = async (form: AuthFormFields): Promise<true | AuthError> => {
	try {
		const tokens = await loginUserAndGetTokens(form);

		updateUserLS(tokens);
		updateUser({
			isAuth: true,
			isInit: true,
			access: tokens.access,
			refresh: tokens.refresh,
		});
		return true;
	} catch (e) {
		updateUser({
			isAuth: false,
			isInit: true,
		});
	}
	return {
		message:
			"Неизвестная ошибка при автризации, пожалуйста повторите попытку",
	};
};

export default userAuth;
