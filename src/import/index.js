import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/** @type {import("eslint").Linter.Config} */
export default {
	// Plugins
	plugins: {
		"simple-import-sort": eslintPluginSimpleImportSort
	},
	// Rules
	rules: {
		"simple-import-sort/imports": "warn",
		"simple-import-sort/exports": "warn"
	}
};
