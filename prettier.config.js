/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default config = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss', // must be last
  ],

  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
}
