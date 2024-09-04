import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import("eslint").Linter.Config} */
export default {
	// Plugins
	plugins: {
		prettier: eslintPluginPrettier
	},
	// Configs
	...eslintPluginPrettierRecommended,
	// Rules
	rules: {
		"prettier/prettier": ["warn"]
	}
};
