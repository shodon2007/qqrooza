import { User } from "entities/user";
import { UserLocalStorageKey } from "shared/config/constants";

type UserRequired = Required<User>;
type UserStorage = Pick<UserRequired, "access"> & Pick<UserRequired, "refresh">;

const isUserCorrect = (user: unknown): user is UserStorage => {
	if (
		typeof user === "object" &&
		user !== null &&
		"access" in user &&
		"refresh" in user &&
		typeof (user as UserStorage).access === "string" &&
		typeof (user as UserStorage).refresh === "string"
	) {
		return true;
	}
	return false;
};

export const getUserFromLS = (): UserStorage => {
	const rawUser = localStorage.getItem(UserLocalStorageKey);
	if (!rawUser) {
		throw new Error();
	}

	let user: unknown;
	try {
		user = JSON.parse(rawUser);
	} catch (e) {
		throw new Error();
	}
	if (!isUserCorrect(user)) {
		throw new Error();
	}
	return user;
};
