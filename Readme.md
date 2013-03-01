# queue.js

A simple queue data structure for Node.js and the browser.

## Installation

As component for the browser:

```
$ component install janogonzalez/queuejs
```

As npm for Node.js:

```
$ npm install queuejs
```

## Example

```js
var Queue = require('queuejs');

var queue = new Queue();

queue.enq(10);
queue.size(); // 1
queue.peek(); // 10
queue.deq(); // 10
```

## API

### Queue()

Initializes a new empty `Queue`.

### Queue#deq()

Dequeues the top element of the `Queue`.
Throws an `Error` when the queue is empty.

### Queue#empty()

Returns whether the `Queue` is empty or not.

### Queue#enq(element)

Enqueues the `element` at the end of the `Queue` and returns its new size.

### Queue#peek()

Peeks at the top element of the `Queue`.
Throws an `Error` when the queue is empty.

### Queue#size()

Returns the size of the `Queue`.

## Testing

```
$ npm test
```

## Licence

MIT
