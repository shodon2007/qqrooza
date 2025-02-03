import { AuthFormFields } from "entities/auth";
import apiInstance from "shared/config/api-instance";

enum authPaths {
	SignIn = "/api/token/",
}

const authApi = {
	postAuth: (form: AuthFormFields) =>
		apiInstance.post(authPaths.SignIn, form),
};

export { authApi };
