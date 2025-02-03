import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { type FC } from "react";

type LangSwitcherProps = {
	className?: string;
};

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button theme={ThemeButton.CLEAR} onClick={toggleLanguage}>
			{t("Язык")}
		</Button>
	);
};

export default LangSwitcher;
