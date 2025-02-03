import { AxiosResponse } from "axios";
import { textApi } from "../api/textApi";
import { TextItem } from "../model/types/text";
import { $textStore, updateTextStore } from "../model/store/textStore";

async function getTexts() {
	updateTextStore({ isLoading: true, items: $textStore.getState().items });
	try {
		const texts: AxiosResponse<TextItem[]> = await textApi.getAll();

		if (texts.status !== 200 || !Array.isArray(texts.data)) {
			throw new Error();
		}

		updateTextStore({ isLoading: false, items: texts.data });
		return texts.data;
	} catch (e) {
		updateTextStore({ isLoading: false, items: [] });
	}
}

export default getTexts;
