import { type FC } from "react";
import "./Loader.scss";
import clsx from "clsx";

type PageLoaderProps = {
    className?: string;
};

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={clsx("lds-spinners", className ?? "")}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default PageLoader;
