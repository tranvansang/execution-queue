# Execution queue [![Build Status](https://travis-ci.org/tranvansang/execution-queue.svg?branch=master)](https://travis-ci.org/tranvansang/make-queue)
[![NPM](https://nodei.co/npm/make-queue.png)](https://nodei.co/npm/make-queue/)

Execute async callbacks in the correct orders.

## API reference
There is only one function from the default import

```javascript
import makeQueue from 'make-queue'
// or
const makeQueue = require('make-queue')
```

- `const queue = makeQueue(skipError)`: create a new queue `queue`. Default: `skipError = true`.
- `queue(cb)`: appends the `cb` callback to the queue and returns a promise which resolves the `cb`'s results.

If `skipError` is false, once a callback in a chain throws an error, all following calls fail immediately and throw this error.

