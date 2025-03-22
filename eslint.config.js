import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import pluginNode from 'eslint-plugin-n';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Globalna konfiguracja z Prettier
  {
    ignores: [
      '**/node_modules/*',
      '**/build/*',
      '**/dist/*',
      '**/public/*',
      '**/*.min.js',
    ],
    plugins: {
      prettier: pluginPrettier, // Wtyczka Prettier
      n: pluginNode, // Wtyczka dla Node.js
      react: pluginReact, // Wtyczka dla React
    },
  },

  // Konfiguracja dla backendu (Node.js + Express)
  {
    files: ['backend/**/*.js'],
    languageOptions: {
      globals: { ...globals.node }, // Środowisko Node.js
    },
    ...pluginJs.configs.recommended,
    rules: {
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-missing-import': 'off',
    },
  },

  // Konfiguracja dla frontendu (React)
  {
    files: ['frontend/src/**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'jsx-a11y/anchor-has-content': 'off', // Ta reguła wyłączona globalnie dla React
    },
  },

  // Wyłączenie reguł ESLint kolidujących z Prettier
  configPrettier,
];
