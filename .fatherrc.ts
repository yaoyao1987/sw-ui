import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  entry: 'src/index.tsx',
  cjs: 'babel',
  esm: 'babel',
  doc: { typescript: true },
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true
};

export default options;
