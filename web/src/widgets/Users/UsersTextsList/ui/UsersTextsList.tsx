import { Modal, Table } from "antd";
import { useUnit } from "effector-react";
import {
	$usersTextListStore,
	updateUsersTextListStore,
} from "../model/store/usersTextListStore";
import { getUsersTexts } from "../lib/getUsersTextsList";
import { useEffect } from "react";

export function UsersTextList() {
	const usersTextStore = useUnit($usersTextListStore);
	useEffect(() => {
		if (typeof usersTextStore.user_id === "number") {
			getUsersTexts(usersTextStore.user_id);
		}
	}, [usersTextStore.user_id]);

	const cols = [
		{
			title: "id",
			dataIndex: "id",
			key: "id",
			width: 10,
		},
		{
			title: "value",
			dataIndex: "text",
			key: "text",
		},
	];

	const closeModal = () => {
		updateUsersTextListStore({
			items: [],
			user_id: null,
			isLoading: false,
			isOpen: false,
		});
	};

	return (
		<Modal
			title={`Список текстов пользователя ${usersTextStore.username}`}
			open={usersTextStore.isOpen}
			onOk={closeModal}
			onCancel={closeModal}
		>
			<Table
				columns={cols}
				dataSource={usersTextStore.items}
				loading={usersTextStore.isLoading}
			/>
		</Modal>
	);
}
