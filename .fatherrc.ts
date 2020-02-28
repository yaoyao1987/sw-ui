import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  doc: { typescript: true },
  extractCSS: true,
  lessInBabelMode: true,
};

export default options;
