import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      builder: 'mkdist',
      input: './src/index.ts',
    },
    {
      builder: 'mkdist',
      input: './src/components',
      loaders: ['vue'],
      pattern: ['**/*.vue'],
    },
    {
      builder: 'mkdist',
      format: 'esm',
      input: './src/components',
      loaders: ['js'],
      pattern: ['**/*.ts'],
    },
  ],
});
