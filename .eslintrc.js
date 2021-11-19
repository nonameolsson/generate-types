// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'react-prefer-function-component'],
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/all',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-dupe-else-if': 'error',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'default-case-last': 'error',
    'grouped-accessor-pairs': 'error',
    'no-constructor-return': 'error',
    'no-implicit-coercion': 'error',
    'prefer-regex-literals': 'error',
    'capitalized-comments': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-void': 'off',

    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true,
        ignore: [0],
        enforceConst: true,
        detectObjects: true
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true }
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',

    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',

    'import/no-deprecated': 'error',
    'import/order': 'off',

    // React classes should not be used
    'react/no-did-update-set-state': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-is-mounted': 'off',
    'react/no-redundant-should-component-update': 'off',
    'react/no-render-return-value': 'off',
    'react/no-string-refs': 'off',
    'react/no-this-in-sfc': 'off',
    'react/no-will-update-set-state': 'off',
    'react/require-default-props': 'off',
    'react/prefer-es6-class': 'off',
    'react/no-unused-state': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-render-return': 'off',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    'react/boolean-prop-naming': [
      'error',
      {
        validateNested: true
      }
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration'
      }
    ],
    'react/no-unstable-nested-components': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true
      }
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: false,
        ignoreDOMComponents: false
      }
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: false,
          pascalCase: false,
          kebabCase: true
        }
      }
    ],
    'unicorn/no-nested-ternary': ['error'],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          props: true,
          Props: true
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
