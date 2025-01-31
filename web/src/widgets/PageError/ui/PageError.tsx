import clsx from "clsx";
import cls from "./PageError.module.scss";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";

type PageErrorProps = {
    className?: string;
};

const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={clsx(cls.PageError, className)}>
            {t("Страница непредвиденной ошибки")}
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};

export default PageError;
