import React, { type ErrorInfo, type ReactNode, Suspense } from "react";
import { PageError } from "widgets/PageError";

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		const { hasErrror }: any = this.state;
		const { children } = this.props;
		if (this.state.hasError) {
			return (
				<Suspense fallback={""}>
					<PageError />
				</Suspense>
			);
		}

		return this.props.children;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}
}

export default ErrorBoundary;
