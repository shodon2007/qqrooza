import apiInstance from "shared/config/api-instance";

enum initPaths {
	updateAccess = "/api/token/refresh",
}

const initApi = {
	updateAccess: (refresh: string) =>
		apiInstance.post(initPaths.updateAccess, { refresh }),
};

export { initApi };
