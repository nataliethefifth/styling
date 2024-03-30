/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import stylexPlugin from '@stylexjs/esbuild-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR_NAME = 'public/dist';
const OUTFILE = `${BUILD_DIR_NAME}/bundle.js`;
const STYLEX_BUNDLE_PATH = path.resolve(
  __dirname,
  '..',
  `${BUILD_DIR_NAME}/stylex.css`,
);

let ctx = await esbuild.context({
  entryPoints: [path.resolve(__dirname, '..', 'src/App.tsx')],
  bundle: true,
  outfile: OUTFILE,
  sourcemap: true,
  minify: false,
  plugins: [
    // See all options in the babel plugin configuration docs:
    // https://stylexjs.com/docs/api/configuration/babel-plugin/
    stylexPlugin({
      useCSSLayers: true,
      generatedCSSFileName: STYLEX_BUNDLE_PATH,
      stylexImports: ['@stylexjs/stylex'],
      unstable_moduleResolution: {
        type: 'commonJS',
        // rootDir: path.resolve(__dirname, '../../..'),
        rootDir: path.resolve(__dirname, '../'),
      },
    }),
  ],
}).catch(() => process.exit(1));

await ctx.watch();

ctx.serve({
  host: '0.0.0.0',
  port: 5173,
  servedir: 'public',
});

