export type BuildMode = "production" | "development";

export type BuildPaths = {
	entry: string;
	build: string;
	html: string;
	src: string;
	env: string;
	locales: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	isAnalyze: boolean;
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	isAnalyze: boolean;
};
