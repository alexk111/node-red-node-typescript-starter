# Node-RED Node TypeScript Starter

This is a quick-start template repository for creating new Node-RED node sets in TypeScript.

What's included:
- TypeScript compilation
- Unit testing with Jest
- Local Node-RED instance with your node set pre-installed on the palette
- CLI scaffolding for new nodes from templates
- Dev watch mode

## Project Structure

```
node-red-node-typescript-starter/
 ├──src/                             * source files of the node set
 │   ├──__tests__/                   * tests for the node set (test file names should match *.test.ts glob pattern)
 │   │   └──transform-text.test.ts   * tests for the transform-text node
 │   │
 │   └──nodes/                       * node set folder, where subfolder names = node types
 │       ├──shared/                  * folder for .ts files shared across multiple nodes in the node set
 │       │
 │       └──transform-text/          * source files of the transform-text node
 │           ├──icons/               * custom icons used by the node set in the editor
 │           │
 │           ├──modules/             * .ts modules for the runtime side (transform-text.js file) of the node
 │           │
 │           ├──shared/              * folder for .ts files shared between the runtime side (.js file) and the editor side (.html file) of the node
 │           │
 │           ├──transform-text.html/ * files for compiling and bundling into the editor side (transform-text.html file) of the node
 │           │   ├──modules/         * .ts modules
 │           │   ├──editor.html      * html template for the edit dialog
 │           │   ├──help.html        * html template for the help in the info tab
 │           │   └──index.ts         * entry file
 │           │
 |           └──transform-text.ts    * entry file for the runtime side (transform-text.js file) of the node
 |
 ├──package.json                     * dependencies and node types for the Node-RED runtime to load
 |
 ├──rollup.config.editor.json        * rollup config for building the editor side of the nodes
 |
 ├──tsconfig.json                    * base typescript config, for the code editor
 ├──tsconfig.runtime.json            * config for creating a production build of the runtime side of the nodes
 └──tsconfig.runtime.watch.json      * config for watching and incremental building the runtime side of the nodes
```

## Getting Started

1. Generate a new GitHub repository by clicking the `Use this template` button at the top of the repository homepage (or just [click this link](https://github.com/alexk111/node-red-node-typescript-starter/generate)), then clone your new repo.
2. Edit `package.json`:
    - `name` - should be a [scoped name](https://docs.npmjs.com/cli/v8/using-npm/scope) as per [Node-RED recommendations](https://nodered.org/blog/2022/01/31/introducing-scorecard#changing-our-recommended-naming-convention)
    - `version`
    - `description`
3. Install dependencies: `npm install`.

## Developing Nodes

Build, Test & Start Node-RED with your node set on the palette, in Watch mode:

```
npm run dev
```

## Building Node Set

Create a production build:

```
npm run build
```

Start Node-RED with the built node set on the palette:

```
npm run start
```

## Adding Nodes

You can quickly scaffold a new node and add it to the node set. Use the following command to create `my-new-node-type` node:

```
npm run add-node my-new-node-type
```

The node generator is based on mustache templates. At the moment there are three templates available:

- `blank` (used by default) - basic node for Node-RED >=1.0
- `blank-0` - node with a backward compatibility for running on Node-RED <1.0
- `config` - configuration node

To generate a node using a template, specify it as the third argument:

```
npm run add-node my-new-node-type blank
```

or

```
npm run add-node my-new-node-config config
```

### Adding Node Templates

If you want to make your own template available, add it to `./utils/templates/`.

## Backers 💝

[[Become a backer](https://mynode.alexkaul.com/gh-donate)]

[![Backer](https://mynode.alexkaul.com/gh-backer/top/0/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/0/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/1/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/1/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/2/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/2/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/3/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/3/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/4/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/4/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/5/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/5/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/6/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/6/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/7/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/7/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/8/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/8/profile)
[![Backer](https://mynode.alexkaul.com/gh-backer/top/9/avatar/60)](https://mynode.alexkaul.com/gh-backer/top/9/profile)

## License

MIT © Alex Kaul
