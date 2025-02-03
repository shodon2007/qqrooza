import axios, { InternalAxiosRequestConfig } from "axios";
import { $userStore } from "entities/user";

let apiUrl: string | undefined = process.env.REACT_APP_API_URL;
if (apiUrl === undefined) {
	console.error(
		"НЕПРАВИЛЬНОЕ ОКРУЖЕНИЕ: Пожалуйста введите REACT_APP_API_URL в .env",
	);
	apiUrl = "http://localhost:4000";
}

const apiInstance = axios.create({
	baseURL: apiUrl,
});

apiInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const userStore = $userStore.getState();
	config.headers.Authorization = `Bearer ${userStore.access}`;
	return config;
});

export default apiInstance;
