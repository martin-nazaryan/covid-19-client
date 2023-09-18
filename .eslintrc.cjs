module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,
    'import/named': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': ['error'],
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        'newlines-between': 'always',
      },
    ],
  },
};
