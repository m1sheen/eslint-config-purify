import globals from "globals";

import eslintConfigPurify from "./dist/index.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...eslintConfigPurify,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2020
			}
		}
	},
	{
		ignores: ["node_modules", "dist"]
	}
];
