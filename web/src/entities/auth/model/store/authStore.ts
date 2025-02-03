import { createEvent, createStore } from "effector";
import { AuthStore } from "../types/authTypes";

const $authStore = createStore<AuthStore>({
	isLoading: false,
});

const updateAuthStore = createEvent<AuthStore>();

$authStore.on(updateAuthStore, (_, data: AuthStore) => data);

export { $authStore, updateAuthStore };
