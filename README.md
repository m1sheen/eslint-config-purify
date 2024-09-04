# eslint-config-purify [![NPM version][npm-image]][npm-url]

A simple and modern way to make your code pure

## Installation

```sh
npm install --save-dev eslint eslint-config-purify
```

## Configuration (only new: eslint.config.js)

From [`v8.21.0`](https://github.com/eslint/eslint/releases/tag/v8.21.0), eslint announced a new config system.
In the new system, `.eslintrc*` is no longer used. `eslint.config.js` would be the default config file name.

More details: [the new config system](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).

So, you can just extend this config in your `eslint.config.js`:

```js
import eslintConfigPurify from "eslint-config-purify";

export default [
  ...eslintConfigPurify,
  {
    // ... your awesome config (plugins, rules, etc.)
  }
];
```

## Supports

- [JavaScript](src/javascript/index.js)
- [TypeScript](src/typescript/index.js)
- [JSX/TSX](src/react/index.js)
- [Svelte](src/svelte/index.js)

## Features

- [Import Sorting](src/import/index.js)
- [Unused Imports And Vars Warnings](src/unused-imports/index.js)

## License

`eslint-config-purify` is licensed under the [MIT License](https://opensource.org/license/mit).

[npm-url]: https://npmjs.com/package/eslint-config-purify
[npm-image]: https://img.shields.io/npm/v/eslint-config-purify.svg
