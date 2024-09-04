import js from "@eslint/js";
import ts from "typescript-eslint";

export default ts.config(
	// Configs
	js.configs.recommended,
	// Files
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: {
			parser: ts.parser
		}
	}
);
