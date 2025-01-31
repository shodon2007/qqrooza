import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type BuildEnv, type BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
	const mode = env.mode ?? "development";
	const isDev = mode === "development";
	const isAnalyze = env.isAnalyze ?? false;
	const port = env.port ?? 3000;
	const envFile = isDev ? ".dev.env" : ".prod.env";

	const paths: BuildPaths = {
		build: path.resolve(__dirname, "dist"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
		env: path.resolve(__dirname, "config", "env", envFile),
		locales: path.resolve(__dirname, "public", "locales"),
	};

	const config = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		isAnalyze,
	});

	return config;
};
