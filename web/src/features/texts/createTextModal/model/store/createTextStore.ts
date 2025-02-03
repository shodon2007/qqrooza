import { createEvent, createStore } from "effector";

interface CreateStoreTypes {
	isOpen: boolean;
}
export const $createTextStore = createStore<CreateStoreTypes>({
	isOpen: false,
});

export const updateCreateTextStore = createEvent<CreateStoreTypes>();

$createTextStore.on(updateCreateTextStore, (_, data) => {
	return data;
});
