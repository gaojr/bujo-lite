//@ts-check

'use strict'

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  target: 'webworker',
  entry: './src/extension.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'extension.js',
    module: true,
    library: { type: 'module' },
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: {
    vscode: 'vscode',
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.ts', '.js'],
    alias: {},
    fallback: {},
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
}

export default config
