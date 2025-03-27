/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-astro"],
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  printWidth: 999,
  htmlWhitespaceSensitivity: "ignore",
};

export default config;