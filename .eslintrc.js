module.exports = {
	// Third-party plugins
	plugins: ["prettier", "import", "unused-imports"],
	// Extends config
	extends: [
		"eslint:recommended",
		"prettier" // Make sure this is always the last element in the array
	],
	// ESLint plugins rules
	rules: {
		// Standart rules
		curly: "warn", // Enforce consistent brace style for all control statements
		"no-empty": [
			"error",
			{
				allowEmptyCatch: true
			}
		],
		// Prettier
		"prettier/prettier": [
			"warn",
			{
				semi: true,
				useTabs: true,
				printWidth: 100,
				trailingComma: "none",
				endOfLine: "lf"
			}
		],
		// Unused vars and imports
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
		],
		// Imports sorting
		"sort-imports": [
			"warn",
			{
				ignoreDeclarationSort: true, // Don't want to sort import lines, use eslint-plugin-import instead
				allowSeparatedGroups: true
			}
		],
		"import/newline-after-import": "warn",
		"import/no-deprecated": "warn",
		"import/no-useless-path-segments": "warn",
		"import/order": [
			"warn",
			{
				groups: [
					"builtin", // Built-in imports (come from NodeJS native) go first
					"external", // External imports
					"internal", // Absolute imports
					["sibling", "parent"], // Relative imports, the sibling and parent types they can be mingled together
					"index", // Index imports
					"unknown" // Unknown
				],
				"newlines-between": "always",
				alphabetize: {
					order: "asc", // Sort in ascending order
					caseInsensitive: true // Ignore case
				}
			}
		]
	},
	// Override config for different extensions
	overrides: [
		{
			// TypeScript files
			files: ["*.ts", ".tsx"],
			// TypeScript parser
			parser: "@typescript-eslint/parser",
			// TypeScript plugins
			plugins: ["@typescript-eslint"]
		}
	]
};
