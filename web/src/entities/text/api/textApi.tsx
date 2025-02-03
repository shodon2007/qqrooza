import apiInstance from "shared/config/api-instance";
import { TextItem } from "../model/types/text";

enum urls {
	getAll = "/api/texts/",
}

const textApi = {
	getAll: () => apiInstance.get<TextItem[]>(urls.getAll),
};

export { textApi };
