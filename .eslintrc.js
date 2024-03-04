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
			files: ['.eslintrc.{js,cjs}', '*.ts'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json']
	},
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['error', "always"],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': 'error',
		"@typescript-eslint/member-delimiter-style": ["error", {
      		multiline: {
      		  delimiter: 'semi',
      		  requireLast: true,
      		},
      		singleline: {
      		  delimiter: 'comma',
      		  requireLast: false,
      		},
    	}],
		"@typescript-eslint/method-signature-style": "off",
		"@typescript-eslint/consistent-type-definitions": "off"
	},
};
