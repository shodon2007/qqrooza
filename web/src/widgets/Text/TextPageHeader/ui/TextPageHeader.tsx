import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
	CreateTextModal,
	updateCreateTextStore,
} from "features/texts/createTextModal";

export const TextPageHeader = () => {
	return (
		<div>
			<CreateTextModal />
			<Button onClick={() => updateCreateTextStore({ isOpen: true })}>
				<PlusOutlined />
				Добавить новый текст
			</Button>
		</div>
	);
};
