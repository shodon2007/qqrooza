/*
    namespaces:
        LS - localStorage
*/

import { updateUser } from "entities/user";

import { checkTokenIsExpired } from "./utils/checkTokenIsExpired";
import { getUserFromLS } from "./utils/getUserFromStorage";
import { updateAccessToken } from "./utils/updateAccessToken";
import { clearUserLS } from "./utils/clearUserStorage";

async function initAuth() {
	try {
		const user = getUserFromLS();
		const isExpired = checkTokenIsExpired(user.access);

		if (isExpired) {
			const resp = await updateAccessToken(user.refresh);
			user.access = resp.data.access;
		}

		updateUser({
			isAuth: true,
			isInit: true,
			...user,
		});
	} catch (e) {
		clearUserLS();
		updateUser({
			isAuth: false,
			isInit: true,
		});
	}
}

export default initAuth;
