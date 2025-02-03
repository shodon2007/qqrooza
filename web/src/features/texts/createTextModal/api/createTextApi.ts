import apiInstance from "shared/config/api-instance";

export const createText = async (text: string) => {
	return await apiInstance.post("/api/texts/", { text: text });
};
