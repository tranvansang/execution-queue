import 'regenerator-runtime'

import makeQueue from './index'

const sleep = async ms => await new Promise(resolve => setTimeout(resolve, ms))

describe('make queue', () => {
  test('correct orders', async () => {
    const queue = makeQueue(true)
    const values = []
    queue(async () => {
      values.push(1)
      await sleep(100)
      values.push(2)
    })
    queue(async () => {
      values.push(3)
      await sleep(0)
      values.push(4)
    })
    await queue(async () => {
      values.push(5)
      await sleep(200)
      values.push(6)
    })
		expect(values).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('skip error false', async () => {
    const queue = makeQueue(false)
    let value = 1
    queue(async () => {
    	value = 2
			throw new Error()
    })
    queue(async () => {
    	value = 3
    })
		try {
      await queue(async () => {
        value = 4
      })
    } catch {}
    expect(value).toBe(2)
  })
  test('skip error true', async () => {
    const queue = makeQueue(true)
    let value = 1
    queue(async () => {
      value = 2
      throw new Error()
    })
    queue(async () => {
      value = 3
    })
    await queue(async () => {
      value = 4
    })
    expect(value).toBe(4)
  })
})
