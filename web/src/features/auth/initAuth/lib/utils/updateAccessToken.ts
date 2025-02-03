import { AxiosResponse } from "axios";
import { initApi } from "../../api/initAuthApi";

export async function updateAccessToken(refresh: string) {
	const resp: AxiosResponse = await initApi.updateAccess(refresh);

	if (resp.status !== 200 || resp.data.access !== "string") {
		throw new Error();
	}
	return resp;
}
