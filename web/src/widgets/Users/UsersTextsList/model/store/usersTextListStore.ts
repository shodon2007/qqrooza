import { createEvent, createStore } from "effector";
import { TextItem } from "entities/text";

interface UsersTextListStore {
	isLoading: boolean;
	isOpen: boolean;
	user_id: null | number;
	items: TextItem[];
	username?: string;
}

export const $usersTextListStore = createStore<UsersTextListStore>({
	isOpen: false,
	isLoading: false,
	user_id: null,
	items: [],
});

export const updateUsersTextListStore = createEvent<UsersTextListStore>();

$usersTextListStore.on(updateUsersTextListStore, (state, data) => {
	return { ...state, ...data };
});
