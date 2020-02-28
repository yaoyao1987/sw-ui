import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  doc: { typescript: true },
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true
};

export default options;
