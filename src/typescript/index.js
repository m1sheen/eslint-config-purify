import ts from "typescript-eslint";

export default ts.config(
	// Plugins
	{
		plugins: {
			"@typescript-eslint": ts.plugin
		}
	},
	// Files
	{
		files: ["**/*.{ts,mts}"],
		languageOptions: {
			parser: ts.parser
		}
	}
);
