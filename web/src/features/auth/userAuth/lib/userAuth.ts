import { AuthFormFields } from "entities/auth";
import { updateUser } from "entities/user";
import { authApi } from "../api/userAuthApi";

const userAuth = async (form: AuthFormFields) => {
    const resp = await authApi.postAuth(form);
    console.log(resp);
    updateUser({ isAuth: true, isInit: true });
};

export default userAuth;
