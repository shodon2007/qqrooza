import { type FC, Suspense, useEffect } from "react";
import clsx from "clsx";

import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";
import { initUser } from "entities/user";

import "app/styles/index.scss";
import { ToastContainer } from "react-toastify";

const App: FC = () => {
    useEffect(() => {
        initUser();
    }, []);

    return (
        <div className={clsx("app", "global_theme_dark")}>
            <Suspense fallback="">
                <Header />
                <div className="content-page">
                    <AppRouter />
                </div>
                <ToastContainer />
            </Suspense>
        </div>
    );
};

export default App;
