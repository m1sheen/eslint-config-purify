import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

/** @type {import("eslint").Linter.Config} */
export default {
	// Plugins
	plugins: {
		"unused-imports": eslintPluginUnusedImports
	},
	// Rules
	rules: {
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "warn",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_"
			}
		]
	}
};
