
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import stylexPlugin from '@stylexjs/esbuild-plugin';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const BUILD_DIR_NAME = 'public/dist';
const BUILD_DIR_NAME = 'docs';
const OUTFILE = `${BUILD_DIR_NAME}/bundle.js`;
const STYLEX_BUNDLE_PATH = path.resolve(
  __dirname,
  '..',
  `${BUILD_DIR_NAME}/stylex.css`,
);

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, '..', 'src/App.jsx')],
    bundle: true,
    outfile: OUTFILE,
    minify: true,
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    plugins: [
      esbuildPluginTsc({
        // If true, force compilation with tsc
        force: true,
        // If true, enables tsx file support
        tsx: true
      }),
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
  })
  .catch(() => process.exit(1));
