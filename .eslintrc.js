module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'standard-with-typescript',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		semi: 'on',
		'@typescript-eslint/semi': 'error',
		indent: 'off',
		'@typescript-eslint/indent': 'error',
	},
};

