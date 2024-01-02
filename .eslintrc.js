module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.ts', '.tsx', '.jsx']},
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-use-before-define': ['error', {variables: false}],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {exceptAfterSingleLine: true},
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    camelcase: 'off',
  },
  ignorePatterns: ['node_modules'],
  globals: {fetch: true},
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-module': {},
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
