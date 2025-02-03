import { UserLocalStorageKey } from "shared/config/constants";
import { AuthTokens } from "../../model/types";

export const updateUserLS = (tokens: AuthTokens) => {
	localStorage.setItem(UserLocalStorageKey, JSON.stringify(tokens));
};
