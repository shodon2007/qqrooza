import { createStore, createEvent, createEffect, sample } from "effector";

import { User } from "../types/user";

export const $userStore = createStore<User>({
	isAuth: false,
	isInit: false,
});

export const updateUser = createEvent<User>();

const updateUserStore = (_: User, data: User) => {
	return data;
};

$userStore.on(updateUser, updateUserStore);
