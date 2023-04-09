import {expect, test} from '@jest/globals'
import {readFile} from 'fs/promises'
import path from 'path'
import {getMetricRow, run} from '../src/main'

test('Row metric with 100%', () => {
  const metrics = {
    loc: 50,
    ncloc: 50,
    methods: 10,
    coveredmethods: 10,
    conditionals: 0,
    coveredconditionals: 0,
    statements: 100,
    coveredstatements: 100,
    elements: 1,
    coveredelements: 1
  }

  expect(getMetricRow('foo', metrics)).toBe(`<tr>
  <td>foo
  <td align="center">100%
  <td align="right">100/100
  <td align="center">100%
  <td align="right">10/10
  <td align="center">100%
  <td align="right">1/1
  <td align="center">🚀`)
})

test('Row metric with 90%', () => {
  const metrics = {
    loc: 50,
    ncloc: 50,
    methods: 10,
    coveredmethods: 10,
    conditionals: 0,
    coveredconditionals: 0,
    statements: 100,
    coveredstatements: 100,
    elements: 10,
    coveredelements: 9
  }

  expect(getMetricRow('foo', metrics)).toBe(`<tr>
  <td>foo
  <td align="center">100%
  <td align="right">100/100
  <td align="center">100%
  <td align="right">10/10
  <td align="center">90%
  <td align="right">9/10
  <td align="center">✅`)
})

test('Row metric with 60%', () => {
  const metrics = {
    loc: 50,
    ncloc: 50,
    methods: 10,
    coveredmethods: 10,
    conditionals: 0,
    coveredconditionals: 0,
    statements: 100,
    coveredstatements: 100,
    elements: 10,
    coveredelements: 6
  }

  expect(getMetricRow('foo', metrics)).toBe(`<tr>
  <td>foo
  <td align="center">100%
  <td align="right">100/100
  <td align="center">100%
  <td align="right">10/10
  <td align="center">60%
  <td align="right">6/10
  <td align="center">➖`)
})

test('Row metric with 0%', () => {
  const metrics = {
    loc: 50,
    ncloc: 50,
    methods: 10,
    coveredmethods: 0,
    conditionals: 0,
    coveredconditionals: 0,
    statements: 100,
    coveredstatements: 0,
    elements: 10,
    coveredelements: 0
  }

  expect(getMetricRow('foo', metrics)).toBe(`<tr>
  <td>foo
  <td align="center">0%
  <td align="right">0/100
  <td align="center">0%
  <td align="right">0/10
  <td align="center">0%
  <td align="right">0/10
  <td align="center">❌`)
})

test('Row metric with bold style', () => {
  const metrics = {
    loc: 50,
    ncloc: 50,
    methods: 10,
    coveredmethods: 10,
    conditionals: 0,
    coveredconditionals: 0,
    statements: 100,
    coveredstatements: 100,
    elements: 1,
    coveredelements: 1
  }

  expect(getMetricRow('foo', metrics, true)).toBe(`<tr>
  <td><strong>foo
  <td align="center"><strong>100%
  <td align="right"><strong>100/100
  <td align="center"><strong>100%
  <td align="right"><strong>10/10
  <td align="center"><strong>100%
  <td align="right"><strong>1/1
  <td align="center"><strong>🚀`)
})

test('Markdown generation', async () => {
  process.env['INPUT_FILENAME'] = './__tests__/data/clover.xml'
  const generated = await run()
  const expected = (
    await readFile(path.resolve('./__tests__/data/code-coverage-results.md'))
  ).toString()
  expect(expected).toBe(generated)
})
