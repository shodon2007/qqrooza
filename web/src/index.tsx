import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

import "shared/config/i18n/i18n";

ReactDOM.render(
	<BrowserRouter>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById("root"),
);
