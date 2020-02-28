import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'babel',
  esm: 'babel',
  doc: { typescript: true },
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
};

export default options;
