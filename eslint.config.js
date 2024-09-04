import globals from "globals";

import eslintConfigPurify from "./dist/index.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2020
			}
		}
	},
	...eslintConfigPurify,
	{
		ignores: ["node_modules", "dist"]
	}
];
