import apiInstance from "shared/config/api-instance";

export const deleteText = async (id: number) => {
	await apiInstance.delete(`api/texts/delete/${id}/`);
	return true;
};
