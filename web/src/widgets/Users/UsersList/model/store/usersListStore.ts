import { createEvent, createStore } from "effector";

export interface UsersListItem {
	id: number;
	username: string;
}

interface UsersListStore {
	isLoading: boolean;
	items: UsersListItem[];
}

export const $usersListStore = createStore<UsersListStore>({
	isLoading: true,
	items: [],
});

export const updateUsersListStore = createEvent<UsersListStore>();

$usersListStore.on(updateUsersListStore, (_, data) => data);
