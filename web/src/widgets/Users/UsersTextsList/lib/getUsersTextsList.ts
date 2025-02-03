import { getUsersTextsList } from "../api/getUsersTextsListApi";
import { updateUsersTextListStore } from "../model/store/usersTextListStore";

export const getUsersTexts = async (user_id: number) => {
	updateUsersTextListStore({
		isLoading: true,
		isOpen: true,
		items: [],
		user_id: user_id,
	});
	const resp = await getUsersTextsList(user_id);
	updateUsersTextListStore({
		isLoading: false,
		isOpen: true,
		items: resp.data,
		user_id: user_id,
	});
};
