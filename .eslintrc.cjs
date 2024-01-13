module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      "standard-with-typescript",
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      ecmaFeatures: {
        "jsx": true
      },
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
      "react/jsx-uses-react": ["off"],
      "react/jsx-props-no-spreading": ["warn"],
      "no-shadow": "off",
      "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "import/no-extraneous-dependencies": ["off"],
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        }
      ],
      "@typescript-eslint/strict-boolean-expressions": 0,
      "react/no-children-prop": ["off"]
    },
}
