```
  _____                _   _             _____ _      _____
 |  __ \              | | (_)           / ____| |    |_   _|
 | |__) | __ __ _  ___| |_ _  ___ ___  | |    | |      | |
 |  ___/ '__/ _` |/ __| __| |/ __/ _ \ | |    | |      | |
 | |   | | | (_| | (__| |_| | (_|  __/ | |____| |____ _| |_
 |_|   |_|  \__,_|\___|\__|_|\___\___|  \_____|______|_____|

```

# Practice CLI

This is a practice project based on [Matt Pocock's Youtube video ("TypeScript, Node, esbuild, Commander... Let's build a CLI!") from August 15th, 2023.](https://www.youtube.com/watch?v=mSnDUMybZXk)

## Features

- TypeScript
- Node.js
- CLI mode
- Commander npm package

## Notes

This project uses [tsconfig / bases](https://github.com/tsconfig/bases).

## Technical Requirements

- Node.js 18.13.0 or higher
- npm 8.19.3 or higher

## How to use

1. Install: `npm i`
1. Run: `npm run dev Parameter` (where Parameter is the input string)

## Example output

```
PS C:\practice-cli> npm run dev Adam

> practice-cli@0.0.1 dev
> npx tsx src/index.ts -- Adam

Hello Adam
```

## License

Please see the description in [LICENSE](LICENSE).

## Release history

First version made in December, 2023.
