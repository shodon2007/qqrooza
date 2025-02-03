import { getAllUsers } from "../api/usersListApi";
import { updateUsersListStore } from "../model/store/usersListStore";

async function getUsersList() {
	updateUsersListStore({ isLoading: true, items: [] });
	const items = await getAllUsers();
	updateUsersListStore({ isLoading: false, items: items.data });
}

export default getUsersList;
