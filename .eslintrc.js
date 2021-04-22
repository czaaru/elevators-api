module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersikon: '2018',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    node: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.ts'],
      },
    ],
    'import/extensions': [
      'error',
      {
        json: 'always',
        js: 'never',
        ts: 'never',
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      // Tests
      files: ['**/*.spec.ts'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'global-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      // Development/CI scripts
      files: ['scripts/*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      // Integration tests
      files: ['integration-tests/**/*'],
      rules: {
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jest/valid-describe': 'off',
        'no-console': 'off',
      },
    },
  ],
};
