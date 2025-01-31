import { type FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import clsx from "clsx";

type SidebarProps = {
    className?: string;
};

const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={clsx(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                className ?? "",
            )}
        >
            <Button
                data-testid="sidebar-button"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
            >
                {t("toggle")}
            </Button>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
