import { globals, makeEslintConfig } from '@averay/codeformat';

export default [
  {
    ignores: ['coverage/**/*', 'dist/**/*'],
  },
  ...makeEslintConfig({ tsconfigPath: './tsconfig.json' }),
  {
    files: ['src/**/*'],
    languageOptions: {
      // eslint-disable-next-line capitalized-comments,multiline-comment-style -- For use in generated projects
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
