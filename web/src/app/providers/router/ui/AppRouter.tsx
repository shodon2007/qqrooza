import { Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useUnit } from "effector-react";

import { $userStore } from "entities/user";
import { RoutePath, routeConfig } from "shared/config/routeConfig/routeConfig";
import PageLoader from "widgets/PageLoader/ui/PageLoader";

const AppRouter = () => {
	const userStore = useUnit($userStore);
	const location = useLocation();
	if (!userStore.isInit) {
		return <PageLoader />;
	}

	if (!userStore.isAuth && location.pathname !== RoutePath.auth) {
		return <Navigate to={RoutePath.auth} />;
	}

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route
						key={path}
						element={<div className="page-wrapper">{element}</div>}
						path={path}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
