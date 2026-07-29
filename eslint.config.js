import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    ignores: ['node_modules', '/dist', '/rollup.config.editor.js', '/utils'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  eslintConfigPrettier,
]);

// const {
//     defineConfig,
// } = require("eslint/config");

// const tsParser = require("@typescript-eslint/parser");
// const jest = require("eslint-plugin-jest");
// const typescriptEslint = require("@typescript-eslint/eslint-plugin");
// const globals = require("globals");
// const js = require("@eslint/js");

// const {
//     FlatCompat,
// } = require("@eslint/eslintrc");

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

// module.exports = defineConfig([{
//     languageOptions: {
//         parser: tsParser,
//         ecmaVersion: 2018,
//         sourceType: "module",
//         parserOptions: {},

//         globals: {
//             ...globals.node,
//             ...globals.jest,
//         },
//     },

//     extends: compat.extends(
//         "plugin:@typescript-eslint/recommended",
//         "prettier",
//         "prettier/@typescript-eslint",
//     ),

//     plugins: {
//         jest,
//         "@typescript-eslint": typescriptEslint,
//     },

//     ignores: ["node_modules", "/dist", "/rollup.config.editor.js", "/utils"],

//     rules: {
//         "@typescript-eslint/no-unused-vars": ["error", {
//             argsIgnorePattern: "^_",
//             varsIgnorePattern: "^_",
//             args: "after-used",
//             ignoreRestSiblings: true,
//         }],

//         "no-unused-expressions": ["error", {
//             allowTernary: true,
//         }],

//         "no-console": 0,
//         "no-confusing-arrow": 0,
//         "no-else-return": 0,
//         "no-return-assign": [2, "except-parens"],
//         "no-underscore-dangle": 0,
//         "jest/no-focused-tests": 2,
//         "jest/no-identical-title": 2,
//         camelcase: 0,

//         "prefer-arrow-callback": ["error", {
//             allowNamedFunctions: true,
//         }],

//         "class-methods-use-this": 0,
//         "no-restricted-syntax": 0,

//         "no-param-reassign": ["error", {
//             props: false,
//         }],

//         "import/no-extraneous-dependencies": 0,
//         "arrow-body-style": 0,
//         "no-nested-ternary": 0,
//     },
// }, {
//     files: ["src/**/*.d.ts"],

//     rules: {
//         "@typescript-eslint/triple-slash-reference": 0,
//     },
// }]);
