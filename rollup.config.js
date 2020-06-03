import babel from 'rollup-plugin-babel';

export default [
  {
    input: './src/index.js',
    output: { file: `esm/history.js`, format: 'esm' },
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]],
      }),
    ],
  },
];
