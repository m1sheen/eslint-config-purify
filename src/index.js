import eslintConfigImport from "./import";
import eslintConfigJavascript from "./javascript";
import eslintConfigPrettier from "./prettier";
import eslintConfigReact from "./react";
import eslintConfigSvelte from "./svelte";
import eslintConfigTypescript from "./typescript";
import eslintConfigUnusedImports from "./unused-imports";

/** @type {import("typescript-eslint").Config} */
export default [
	// Configs
	...eslintConfigJavascript, // JavaScript
	...eslintConfigTypescript, // TypeScript
	eslintConfigImport, // Import
	eslintConfigUnusedImports, // Unused Imports
	...eslintConfigReact, // React
	...eslintConfigSvelte, // Svelte
	eslintConfigPrettier, // Prettier. Make sure this is always the last element
	// Standart rules
	{
		rules: {
			curly: "warn",
			"no-empty": ["warn", { allowEmptyCatch: true }],
			"no-redeclare": "off",
			"no-undef": "off",
			"no-unused-expressions": "warn",
			"no-useless-assignment": "warn"
		}
	}
];
