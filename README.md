# Testing webpack tree shaking

To start up, run `npm install`, and then `npm run build` to build. This repo uses `@microsoft/rush` to symlink 3 packages together automatically as if they were separate npm published libraries.

## Organization

There are 2 projects in the `packages` folder:

* `test-app` - The application which we will bundle into `package/test-app/dist/test-app.js`. It references Spinner in `test-library`.
* `test-library` - The main library, which contains "Spinner" and "Label" classes.

## Expected

Minified bundle does not mention "Label"

## Resulted

Bundle contains label.