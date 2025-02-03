import { createEvent, createStore } from "effector";
import { TextStore } from "../types/text";

export const $textStore = createStore<TextStore>({
	isLoading: true,
	items: [],
});

export const updateTextStore = createEvent<TextStore>();

$textStore.on(updateTextStore, (_, data: TextStore) => data);
