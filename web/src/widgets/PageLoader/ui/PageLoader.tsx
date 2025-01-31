import { type FC } from "react";
import Loader from "shared/ui/Loader/Loader";
import cls from "./PageLoader.module.scss";
import clsx from "clsx";

type PageLoaderProps = {
    className?: string;
};

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={clsx(cls.PageLoader)}>
        <Loader />
    </div>
);

export default PageLoader;
