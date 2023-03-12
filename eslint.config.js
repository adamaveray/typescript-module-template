import { makeEslintConfig } from '@averay/codeformat';
import globals from 'globals';

export default [
  {
    ignores: ['coverage/**/*', 'dist/**/*'],
  },
  ...makeEslintConfig({ tsconfigPath: './tsconfig.json' }),
  {
    files: ['src/**/*'],
    languageOptions: {
      // globals: { ...globals.node, NodeJS: 'readonly' },
      // globals: globals.browser,
    },
  },
  {
    files: ['test/**/*'],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest, NodeJS: 'readonly' },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
];
