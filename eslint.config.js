import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    rules: {
      'boundaries/element-types': [
        'error',
        {
          allow: [['features', ['entities', 'shared']]]
        }
      ]
    },
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        projectService: true
      },
      globals: globals.browser
    }
  },
  {
    files: ['**/*.js'],
    extends: [js.configs.recommended, tseslint.configs.disableTypeChecked]
  }
]);
