import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { type BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import Dotenv from "dotenv-webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default function buildPlugins({
	paths,
	isDev,
	isAnalyze,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins: webpack.WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/main.[contenthash:8].css",
			chunkFilename: "css/chunk.[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new Dotenv({
			path: paths.env,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.locales,
					to: "locales",
				},
			],
		}),
	];

	if (isAnalyze) {
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
		});
	}

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
}
