import apiInstance from "shared/config/api-instance";

export const editText = async (id: number, newText: string) => {
	return await apiInstance.put(`/api/texts/update/${id}/`, { text: newText });
};
