import apiInstance from "shared/config/api-instance";

export const getAllUsers = async () => {
	return await apiInstance.get("/api/users");
};
