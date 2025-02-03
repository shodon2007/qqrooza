import { Input, Modal } from "antd";
import { useUnit } from "effector-react";
import {
	$createTextStore,
	updateCreateTextStore,
} from "../model/store/createTextStore";
import { useState } from "react";
import { createText } from "../api/createTextApi";
import getTexts from "entities/text/lib/getTexts";

export const CreateTextModal = () => {
	const [newText, setNewText] = useState("");
	const { isOpen } = useUnit($createTextStore);

	const onCancel = () => {
		updateCreateTextStore({ isOpen: false });
	};

	const onOk = async () => {
		await createText(newText);
		getTexts();
		setNewText("");
		updateCreateTextStore({ isOpen: false });
	};

	return (
		<Modal
			title={"Создать новый текст"}
			onCancel={onCancel}
			onOk={onOk}
			open={isOpen}
		>
			<Input
				value={newText}
				onChange={(e) => setNewText(e.target.value)}
			/>
		</Modal>
	);
};
