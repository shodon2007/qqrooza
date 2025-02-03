import apiInstance from "shared/config/api-instance";

export const getUsersTextsList = (user_id: number) => {
	return apiInstance.get(`/api/users/texts/${user_id}`);
};
