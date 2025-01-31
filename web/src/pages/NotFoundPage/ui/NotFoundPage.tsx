import { type FC } from "react";
import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
import clsx from "clsx";

type NotFoundPageProps = {
    className?: string;
};
const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={clsx(cls.NotFoundPage)}>{t("Страница не найдена")}</div>
    );
};

export default NotFoundPage;
