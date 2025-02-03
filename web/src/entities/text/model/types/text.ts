export interface TextItem {
	text: string;
	id: number;
}

export interface TextStore {
	items: TextItem[];
	isLoading: boolean;
}
