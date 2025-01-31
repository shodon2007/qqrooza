import cls from "./AuthPage.module.scss";
import { AuthForm } from "widgets/Auth/AuthForm";

const AuthPage = () => {
    return (
        <div className={cls.authPage}>
            <AuthForm />
        </div>
    );
};

export default AuthPage;
