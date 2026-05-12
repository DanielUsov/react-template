import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import boundaries from 'eslint-plugin-boundaries';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      boundaries
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
      ...pluginQuery.configs['flat/recommended'],
      eslintPluginPrettier
    ],
    rules: {
      'boundaries/element-types': [
        'error',
        {
          allow: [['features', ['entities', 'shared']]]
        }
      ]
    },
    languageOptions: {
      parser: tsParser,
      globals: globals.browser
    }
  }
]);
