import { createEvent, createStore } from "effector";

interface DeleteTextStoreTypes {
	isOpen: boolean;
	text: null | string;
	id: null | number;
}

export const $deleteTextStore = createStore<DeleteTextStoreTypes>({
	isOpen: false,
	text: null,
	id: null,
});

export const updateDeleteStore = createEvent<DeleteTextStoreTypes>();

$deleteTextStore.on(updateDeleteStore, (_, data: DeleteTextStoreTypes) => data);
