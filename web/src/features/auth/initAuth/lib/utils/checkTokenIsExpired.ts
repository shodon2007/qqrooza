import { jwtDecode } from "jwt-decode";

export const checkTokenIsExpired = (token: string): boolean => {
	try {
		const decoded = jwtDecode(token);
		const tokenExpiration = decoded.exp;
		const now = Date.now() / 1000;

		if (typeof tokenExpiration !== "number" || tokenExpiration < now) {
			return true;
		}
		return false;
	} catch (e) {
		return true;
	}
};
