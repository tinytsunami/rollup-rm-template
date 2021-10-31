import path from 'path';
import banner from 'rollup-plugin-banner';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'main.js',
  output: {
    file: '../plugins/Battle.js',
    format: 'cjs'
  },
  plugins: [
    uglify(),
    banner({
      file: path.join(__dirname, 'header.js')
    })
  ]
};
