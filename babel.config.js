const mode = process.env.NODE_ENV;
function config(api) {
  api.cache(true);
  const base = {
    presets: ['@babel/preset-env', '@babel/preset-flow'],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ],
    comments: !mode,
  };
  const prod = {
    plugins: ['transform-remove-console'],
  };
  const dev = { plugins: [] };
  return mode
    ? { ...base, plugins: [...base.plugins, ...prod.plugins] }
    : { ...base, plugins: [...base.plugins, ...dev.plugins] };
}
module.exports = config;
