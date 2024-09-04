import eslintPluginSvelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
	// Configs
	...eslintPluginSvelte.configs["flat/recommended"],
	...eslintPluginSvelte.configs["flat/prettier"],
	// Files
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	}
];
