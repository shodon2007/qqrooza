import { Space } from "antd";
import { TextList } from "widgets/Text/TextList";
import { TextPageHeader } from "widgets/Text/TextPageHeader";
import cls from "./TextPage.module.scss";

const TextPage = () => {
	return (
		<div className={cls.page}>
			<TextPageHeader />
			<TextList />
		</div>
	);
};

export default TextPage;
