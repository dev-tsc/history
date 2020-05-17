import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import pkg from './package.json';

const input = './modules/index.js';

function external(id) {
  return !id.startsWith('.') && !id.startsWith('/');
}

const esm = [
  {
    input,
    output: { file: `esm/${pkg.name}.js`, format: 'esm' },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      sizeSnapshot()
    ]
  }
];

export default esm;