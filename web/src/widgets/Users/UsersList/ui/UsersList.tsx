import { useEffect } from "react";
import getUsersList from "../lib/getUsersList";
import { useUnit } from "effector-react";
import { $usersListStore, UsersListItem } from "../model/store/usersListStore";
import { Space, Table } from "antd";
import { updateUsersTextListStore } from "widgets/Users/UsersTextsList/model/store/usersTextListStore";
import { UsersTextList } from "widgets/Users/UsersTextsList";

export const UsersList = () => {
	const usersListStore = useUnit($usersListStore);
	useEffect(() => {
		getUsersList();
	}, []);

	const textsListClick = (item: UsersListItem) => {
		updateUsersTextListStore({
			user_id: item.id,
			isOpen: true,
			isLoading: true,
			items: [],
			username: item.username,
		});
	};

	const cols = [
		{
			title: "user_id",
			dataIndex: "id",
			key: "id",
			width: 10,
		},
		{
			title: "username",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "actions",
			key: "text",
			render: (_: unknown, record: UsersListItem) => {
				return (
					<Space size="middle">
						<a onClick={() => textsListClick(record)}>
							Список текстов
						</a>
					</Space>
				);
			},
			width: 250,
		},
	];
	return (
		<div>
			<UsersTextList />
			<Table
				loading={usersListStore.isLoading}
				columns={cols}
				dataSource={usersListStore.items}
			/>
		</div>
	);
};
