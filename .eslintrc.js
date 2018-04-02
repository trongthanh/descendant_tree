// Nau standard eslint rules, save it as .eslintrc.js
module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	rules: {
		'block-scoped-var': 1,
		camelcase: 2,
		'comma-style': [2, 'last'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'comma-spacing': [2, { before: false, after: true }],
		curly: [2, 'all'],
		'dot-notation': [2, { allowKeywords: true }],
		eqeqeq: [2, 'allow-null'],
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': [2, 'unix'],
		'new-cap': [2, { capIsNew: false }], // must: new ClassFunction(); but allow: Component() (JSX component)
		'no-bitwise': 2,
		'no-caller': 2,
		'no-console': 0,
		'no-eval': 2,
		'no-invalid-this': 0,
		'no-iterator': 2,
		'no-loop-func': 2,
		'no-multi-str': 2,
		'no-new': 2,
		'no-proto': 2,
		'no-script-url': 2,
		'no-sequences': 2,
		'no-shadow': 2,
		'no-with': 2,
		'one-var': [2, { initialized: 'never' }],
		quotes: [2, 'single'],
		semi: [2, 'always'],
		'keyword-spacing': 2,
		'space-before-blocks': 2,
		'space-infix-ops': 2,
		'space-unary-ops': [2, { words: true }],
		strict: 0,
		'valid-jsdoc': 2,
	},
	globals: {},
	env: {
		browser: true,
		jquery: true,
		// 'es6': true,
		// 'node': true,
	},
	// 'parser': 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		// 'sourceType': 'module',
		ecmaFeatures: {
			impliedStrict: true,
			// 'jsx': true,
			// 'classes': true,
		},
	},
	plugins: [],
};
