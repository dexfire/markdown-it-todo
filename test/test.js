const markdownIt = require('markdown-it')
const generate = require('markdown-it-testgen')
const m = require('..')

describe('markdown-it-todo', () => {
  const md = markdownIt().use(m)
  generate(`${__dirname}/fixtures/markdown-it-todo.txt`, {header: true}, md)
})
