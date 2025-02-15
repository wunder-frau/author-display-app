import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("tseslint").config}
 */
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      ...tseslint.configs.recommended,
      js.configs.recommended,
      prettier, // must be last
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 'latest', globals: globals.browser },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
      eqeqeq: ['error', 'always'],
      'no-console': ['error', 'always'],
      'react/prop-types': ['error', 'always'],
    },
  },
)
