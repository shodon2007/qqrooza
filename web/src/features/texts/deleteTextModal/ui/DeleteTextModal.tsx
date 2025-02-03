import { Modal } from "antd";
import { useUnit } from "effector-react";
import {
	$deleteTextStore,
	updateDeleteStore,
} from "../model/store/deleteTextStore";
import { memo, useCallback } from "react";
import { deleteText } from "../api/deleteTextModalApi";
import getTexts from "entities/text/lib/getTexts";

export const DeleteTextModal = memo(() => {
	const { isOpen, text, id } = useUnit($deleteTextStore);
	const onOk = useCallback(async () => {
		if (id !== null) {
			await deleteText(id);
			getTexts();
		}
		updateDeleteStore({ id: null, text: null, isOpen: false });
	}, [id]);
	return (
		<Modal
			onClose={() =>
				updateDeleteStore({ id: null, text: null, isOpen: false })
			}
			onOk={onOk}
			title={`text #${id}`}
			open={isOpen}
		>
			Are you sure you want to delete this text ? <p>{text}</p>
		</Modal>
	);
});
