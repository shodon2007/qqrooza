import { createStore, createEvent, createEffect, sample } from "effector";

import { User } from "../types/user";

export const $userStore = createStore<User>({
	isAuth: false,
	isInit: false,
});

export const updateUser = createEvent<User>();
export const initUser = createEvent();

const updateUserStore = (_: User, data: User) => {
	return data;
};

const initUserStoreFx = createEffect(async (): Promise<User> => {
	try {
		const user: Pick<User, "access_token"> | undefined = JSON.parse(
			localStorage.getItem("user") ?? "",
		);
		if (!user?.access_token || !user || typeof user !== "object") {
			return {
				isInit: true,
				isAuth: false,
			};
		}
		return {
			isInit: true,
			isAuth: true,
			access_token: user.access_token,
		};
	} catch (e) {
		return {
			isAuth: false,
			isInit: true,
		};
	}
});

sample({
	clock: initUser,
	target: initUserStoreFx,
});

$userStore.on(updateUser, updateUserStore);
$userStore.on(initUserStoreFx.doneData, (_, data: User) => data);
