import { eslintPluginSvelteVersion } from './versions';

export const extraEslintDependencies = {
  dependencies: {},
  devDependencies: {
    'eslint-plugin-svelte3': eslintPluginSvelteVersion,
  },
};
