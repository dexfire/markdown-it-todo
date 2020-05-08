# markdown-it-todo

[![Greenkeeper badge](https://badges.greenkeeper.io/dexfire/markdown-it-todo.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][david-image]][david-url]
[![Dependency Status][david-dev-image]][david-dev-url]

[npm-image]: https://img.shields.io/npm/v/markdown-it-todo.svg
[npm-url]: https://npmjs.org/package/markdown-it-todo
[build-image]: https://travis-ci.org/dexfire/markdown-it-todo.svg?branch=master
[build-url]: https://travis-ci.org/dexfire/markdown-it-todo
[coverage-image]: https://coveralls.io/repos/github/dexfire/markdown-it-todo/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/dexfire/markdown-it-todo?branch=master
[david-image]: https://david-dm.org/dexfire/markdown-it-todo.svg
[david-url]: https://david-dm.org/dexfire/markdown-it-todo
[david-dev-image]: https://david-dm.org/dexfire/markdown-it-todo/dev-status.svg
[david-dev-url]: https://david-dm.org/dexfire/markdown-it-todo#info=devDependencies

> Markdown todo-list support tag plugin for markdown-it markdown parser,
> which showing as `<input class="markdown-todo" disabled="true" checked="true">`.

> forked from: [![](https://img.shields.io/badge/akuma-markdown--it--enml--todo-green?style=plastic&logo=git)](https://github.com/akuma/markdown-it-enml-todo)

## Install

```bash
npm install markdown-it-todo --save
```

## Usage

```js
const md = require('markdown-it')()
  .use(require('markdown-it-todo'))

const result = md.render('- [x] task 1\n- [ ] task 2')
```

which result as(in a compact style in fact.):

```html
<ul class="task-list">
  <li class="task-list-item">
    <input class="markdown-todo" disabled="true" checked="true"></input> task 1
  </li>
  <li class="task-list-item">
    <input class="markdown-todo" disabled="true" ></input> task 2
  </li>
</ul>
```

## License

[MIT](LICENSE)
