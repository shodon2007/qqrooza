import { UserLocalStorageKey } from "shared/config/constants";

export const clearUserLS = () => localStorage.setItem(UserLocalStorageKey, "");
