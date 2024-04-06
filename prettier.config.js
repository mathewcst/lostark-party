/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<TYPES>',
    '',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '',
    '^(@tanstack(.*)$)|^(@tanstack$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '',
    '<TYPES>^[.|..|@]',
    '',
    '^@/lib',
    '',
    '^@/components',
    '',
    '^@/',
    '',
    '^[../]',
    '',
    '^[./]',
    '',
    '^@/assets',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.4.0',
}

export default config
