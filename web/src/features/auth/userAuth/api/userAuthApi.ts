import { AuthFormFields } from "entities/auth";
import apiInstance from "shared/config/api-instance";

enum authPaths {
	SignIn = "/auth/signIn",
	SignUp = "/auth/signUp",
	Verify = "/auth/verify-token",
}

const authApi = {
	postAuth: (form: AuthFormFields) =>
		apiInstance.post(authPaths.SignIn, form),
};

export { authApi };
