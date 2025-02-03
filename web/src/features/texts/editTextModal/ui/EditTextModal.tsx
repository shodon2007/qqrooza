import { Input, Modal } from "antd";
import { useUnit } from "effector-react";
import {
	$editTextModalState,
	changeEditTextModalStore,
} from "../model/store/editTextState";
import { memo, useCallback } from "react";
import { editText } from "../api/editTextApi";
import getTexts from "entities/text/lib/getTexts";

const EditTextModal = memo(() => {
	const { id, text, isOpen } = useUnit($editTextModalState);

	const onOk = useCallback(async () => {
		if (id !== null && text !== null) {
			await editText(id, text);
			getTexts();
		}
		changeEditTextModalStore({
			isOpen: false,
			id: null,
			text: null,
		});
	}, [id, text]);
	const onCancel = useCallback(() => {
		changeEditTextModalStore({
			isOpen: false,
			id: null,
			text: null,
		});
	}, []);

	return (
		<Modal
			open={isOpen}
			title={`Edit text #${id}`}
			onOk={onOk}
			onCancel={onCancel}
		>
			<Input
				value={text || ""}
				onChange={(e) =>
					changeEditTextModalStore({
						...{ id, isOpen, text },
						text: e.target.value,
					})
				}
			/>
		</Modal>
	);
});

export default EditTextModal;
