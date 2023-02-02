import { makeEslintConfig } from '@adamaveray/codeformat';

export default [
  {
    ignores: ['dist/**/*'],
  },
  ...makeEslintConfig({ tsconfigPath: './tsconfig.json' }),
];
