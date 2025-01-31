import axios from "axios";
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

export default apiInstance;
