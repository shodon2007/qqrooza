import { AuthFormFields } from "entities/auth";

import { authApi } from "../../api/userAuthApi";
import { AxiosResponse } from "axios";
import { AuthTokens } from "../../model/types";

const loginUserAndGetTokens = async (
	form: AuthFormFields,
): Promise<AuthTokens> => {
	const resp: AxiosResponse<Partial<AuthTokens>> =
		await authApi.postAuth(form);

	if (
		resp.status !== 200 ||
		!resp.data?.access ||
		!resp.data?.refresh ||
		typeof resp.data.access !== "string" ||
		typeof resp.data.refresh !== "string"
	) {
		throw new Error();
	}
	return { access: resp.data.access, refresh: resp.data.refresh };
};

export default loginUserAndGetTokens;
