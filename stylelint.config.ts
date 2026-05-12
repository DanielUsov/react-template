import type { Config } from 'stylelint';

export default {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true
  },
  overrides: [
    {
      files: ['**/*.scss'],
      rules: {
        'selector-class-pattern': [
          '^(g-[a-z][a-z0-9-]*|[a-z][a-z0-9]*(__[a-z][a-z0-9-]*)?(--[a-z][a-z0-9-]*)?)$',
          {
            message: 'Ожидается BEM или Gravity UI (g-*) класс'
          }
        ],
        'order/order': [
          'custom-properties',
          'dollar-variables',
          'declarations',
          'rules',
          'at-rules'
        ],
        'order/properties-order': [
          'content',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'display',
          'flex',
          'flex-direction',
          'flex-wrap',
          'align-items',
          'justify-content',
          'gap',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'padding',
          'overflow',
          'font-size',
          'font-weight',
          'line-height',
          'color',
          'background',
          'background-color',
          'border',
          'border-radius',
          'opacity',
          'cursor',
          'transition',
          'transform'
        ],
        'scss/no-duplicate-mixins': true,
        'scss/no-global-function-names': true,
        'color-named': 'never',
        'declaration-no-important': true,
        'no-duplicate-selectors': true,
        'selector-max-id': 0,
        'max-nesting-depth': [
          3,
          {
            ignoreAtRules: ['media', 'supports', 'include', 'mixin']
          }
        ],
        'color-function-notation': 'legacy'
      }
    }
  ],
  ignoreFiles: ['**/*.ts', '**/*.json']
} satisfies Config;
