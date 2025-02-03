import { type RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { AuthPage } from "pages/AuthPage";
import TextPage from "pages/TextPage/ui/TextPage";
import { UsersPage } from "pages/UsersPage";

export enum AppRoutes {
	ABOUT = "about",
	NOT_FOUND = "not_found",
	AUTH = "auth",
	TEXTS = "texts",
	USERS = "users",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.NOT_FOUND]: "*",
	[AppRoutes.AUTH]: "/auth",
	[AppRoutes.TEXTS]: "/",
	[AppRoutes.USERS]: "/users",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
	[AppRoutes.AUTH]: {
		path: RoutePath.auth,
		element: <AuthPage />,
	},
	[AppRoutes.TEXTS]: {
		path: RoutePath.texts,
		element: <TextPage />,
	},
	[AppRoutes.USERS]: {
		path: RoutePath.users,
		element: <UsersPage />,
	},
};
