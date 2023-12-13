module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-refresh',
        'prettier',
    ],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
}
