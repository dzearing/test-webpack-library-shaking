# Testing webpack tree shaking

To start up, run `npm install`, and then `npm run build` to build. This repo uses `@microsoft/rush` to symlink 3 packages together automatically as if they were separate npm published libraries.

## Organization

There are 3 projects in the `packages` folder:

* `test-app` - The application which we will bundle into `package/test-app/dist/test-app.js`.
* `test-library` - The main library, which contains "math" and "science" functions, and re-exports `test-library-2`.
* `test-library-2` - The secondary library, which contains "english" and "geography" functions.

## Notes

The test-app index file in its `lib-es6` folder imports a single helper utility, `doEnglish1`. It is expected that Webpack includes as few modules as possible, pre-bundling, in the output.

What has been observed is that it includes the whole graph and puts the entire tree shaking burden on uglify. There are things that uglify does not handle well. For example, TypeScript class definitions output as self executing es5 functions. If webpack includes these, Uglify is not intelligent enough to remove them without the risk of removing side-effects that may have been potentially caused.

## Things to play with

The `packages/test-app/webpack.config.js` is worth commenting plugins out; you can comment out the uglify step, or the concatenation plugin to see the output difference. 