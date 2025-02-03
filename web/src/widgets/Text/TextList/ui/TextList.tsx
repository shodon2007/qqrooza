import { Space, Table } from "antd";
import { useUnit } from "effector-react";
import { $textStore, TextItem, TextStore } from "entities/text";
import getTexts from "entities/text/lib/getTexts";
import { useCallback, useEffect } from "react";
import cls from "./TextList.module.scss";
import { useTranslation } from "react-i18next";
import { EditTextModal } from "features/texts/editTextModal";
import { changeEditTextModalStore } from "features/texts/editTextModal";
import {
	DeleteTextModal,
	updateDeleteStore,
} from "features/texts/deleteTextModal";

function TextList() {
	const { t } = useTranslation("texts");
	const textStore: TextStore = useUnit($textStore);

	useEffect(() => {
		getTexts();
	}, []);

	const editClick = useCallback((record: TextItem) => {
		changeEditTextModalStore({
			isOpen: true,
			id: record.id,
			text: record.text,
		});
	}, []);

	const deleteClick = useCallback((record: TextItem) => {
		updateDeleteStore({
			isOpen: true,
			id: record.id,
			text: record.text,
		});
	}, []);

	const cols = [
		{
			title: t("id"),
			dataIndex: "id",
			key: "id",
			width: 10,
		},
		{
			title: t("value"),
			dataIndex: "text",
			key: "text",
		},
		{
			title: t("actions"),
			key: "text",
			render: (_: unknown, record: TextItem) => {
				return (
					<Space size="middle">
						<a onClick={() => editClick(record)}>{t("edit")}</a>
						<a onClick={() => deleteClick(record)}>{t("delete")}</a>
					</Space>
				);
			},
			width: 250,
		},
	];

	return (
		<div className={cls.textList}>
			<EditTextModal />
			<DeleteTextModal />
			<Table
				loading={textStore.isLoading}
				columns={cols}
				dataSource={textStore.items}
			/>
		</div>
	);
}

export default TextList;
