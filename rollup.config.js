import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'lib/kiss-fetch-auth.ts',
  plugins: [typescript()],
  output: [
    {
      file: 'dist/kiss-fetch-auth-cjs.js',
      format: 'cjs'
    }, {
      file: 'dist/kiss-fetch-auth.mjs',
      format: 'es'
    }, {
      file: 'dist/kiss-fetch-auth-amd.js',
      format: 'amd',
    }
  ]
};
