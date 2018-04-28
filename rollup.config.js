import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/index.js',
  moduleName: 'most-curried',
  plugins: [
    buble()
  ],
  globals: {
    most: 'Most',
    '@most/prelude': 'MostPrelude'
  },
  external: ['most', '@most/prelude'],
  targets: [
    {
      dest: 'dist/index.js',
      format: 'umd',
      sourceMap: true
    },
    {
      dest: 'dist/index.es.js',
      format: 'es',
      sourceMap: true
    }
  ]
}
