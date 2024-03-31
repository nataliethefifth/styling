
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import stylexPlugin from '@stylexjs/esbuild-plugin';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const BUILD_DIR_NAME = 'public/dist';
// const BUILD_DIR_NAME = 'docs';
// const OUTFILE = `${BUILD_DIR_NAME}/bundle.js`;
const OUTDIR = 'docs';
const STYLEX_BUNDLE_PATH = path.resolve(
  __dirname,
  '..',
  // `${BUILD_DIR_NAME}/stylex.css`,
  `${OUTDIR}/stylex.css`,
);

esbuild
  .build({
    entryPoints: [
      { out: 'index', in: path.resolve(__dirname, '..', 'public/index.html') },
      { out: 'bundle', in: path.resolve(__dirname, '..', 'src/App.jsx') },
      { out: 'theme', in: path.resolve(__dirname, '..', 'public/theme.html') },
      { out: 'bundle-theme', in: path.resolve(__dirname, '..', 'src/Theme.jsx') },
    ],
    bundle: true,
    // outfile: OUTFILE,
    outdir: OUTDIR,
    minify: true,
    loader: { ".html": "copy" },
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    drop: ['console', 'debugger'],
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
