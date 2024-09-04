import ts from "typescript-eslint";

export default ts.config({
	files: ["**/*.{jsx,tsx}"],
	languageOptions: {
		parser: ts.parser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true
			}
		}
	}
});
