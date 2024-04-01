
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import stylexPlugin from '@stylexjs/esbuild-plugin';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

// import http from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const BUILD_DIR_NAME = 'public';
// const OUTFILE = `${BUILD_DIR_NAME}/bundle.js`;
const OUTDIR = 'build';
const STYLEX_BUNDLE_PATH = path.resolve(
  __dirname,
  '..',
  // `${BUILD_DIR_NAME}/stylex.css`,
  `${OUTDIR}/stylex.css`,
);

let ctx = await esbuild.context({
  entryPoints: [
    { out: 'index', in: path.resolve(__dirname, '..', 'public/index.html') },
    { out: 'bundle', in: path.resolve(__dirname, '..', 'src/App.jsx') },
    { out: 'theme', in: path.resolve(__dirname, '..', 'public/theme.html') },
    { out: 'bundle-theme', in: path.resolve(__dirname, '..', 'src/Theme.jsx') },
  ],
  bundle: true,
  // outfile: OUTFILE,
  outdir: OUTDIR,
  // minify: false,
  loader: { ".html": "copy" },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  sourcemap: true,
  banner: { js: ' (() => new EventSource("/esbuild").addEventListener("change", () => location.reload()))();' },
  // banner: { js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();' },
  // define: { ___DEV: 'true' },
  // inject: [path.resolve(__dirname, '..', 'scripts/livereload.js')],
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
}).catch(() => process.exit(1));

await ctx.watch();

const { host, port } = await ctx.serve({
  host: '0.0.0.0',
  port: 5173,
  servedir: 'build',
});
// const { host, port } = await ctx.serve({
//   servedir: 'build',
// });

console.log(`Serving app at ${host}:${port}.`);

// https://esbuild.github.io/api/#serve-proxy
// https://github.com/evanw/esbuild/issues/802#issuecomment-819578182
// http.createServer((req, res) => {
//   console.log(req.url);
//   // if (req.url === '/esbuild') {
//   //   res.writeHead(200, {
//   //     'Content-Type': 'text/event-stream',
//   //     'Cache-Control': 'no-cache',
//   //     Connection: 'keep-alive',
//   //   });
//   //   return
//   // }

//   const options = {
//     hostname: host,
//     port: port,
//     // path: req.url,
//     path: ~req.url.split('/').pop().indexOf('.') || req.url === '/esbuild' ? req.url : `/index.html`,
//     method: req.method,
//     headers: req.headers,
//   }

//   // Forward each incoming request to esbuild
//   const proxyReq = http.request(options, proxyRes => {
//     // If esbuild returns "not found", send a custom 404 page
//     if (proxyRes.statusCode === 404) {
//       res.writeHead(404, { 'Content-Type': 'text/html' })
//       res.end('<h1>A custom 404 page</h1>')
//       return
//     }

//     // Otherwise, forward the response from esbuild to the client
//     res.writeHead(proxyRes.statusCode, proxyRes.headers)
//     proxyRes.pipe(res, { end: true })
//   })

//   // Forward the body of the request to esbuild
//   req.pipe(proxyReq, { end: true })
// }).listen(5173);

// console.log(`Proxy at ${host}:5173`);