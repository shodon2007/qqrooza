import { createEvent, createStore } from "effector";
import { EditTextModalTypes } from "../types/editTextModalStore";

export const $editTextModalState = createStore<EditTextModalTypes>({
	isOpen: false,
	text: null,
	id: null,
});

export const changeEditTextModalStore = createEvent<EditTextModalTypes>();

$editTextModalState.on(changeEditTextModalStore, (_, newState) => {
	return newState;
});
