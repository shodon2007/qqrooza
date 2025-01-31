import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type BuildOptions } from "./types/config";

export default function buildLoaders(
    options: BuildOptions,
): webpack.RuleSetRule[] {
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const babelLoader: webpack.RuleSetRule = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [["@babel/preset-env", { targets: "node 20" }]],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const scss: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string): boolean =>
                            Boolean(resPath.endsWith(".module.scss")),
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:4]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [svgLoader, babelLoader, typescriptLoader, scss];
}
