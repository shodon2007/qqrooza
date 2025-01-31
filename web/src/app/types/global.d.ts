declare module '*.scss' {
  type IclassName = Record<string, string>;
  const classNames: IclassName;
  export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module 'react-refresh-webpack-plugin';

declare module '*.svg' {
	import type React from 'react';
	const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default svg;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
