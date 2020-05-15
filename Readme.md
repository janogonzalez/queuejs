# queue.js

A simple queue data structure for Node.js.

## Installation

```
npm install queuejs
```

## Example

```js
var Queue = require('queuejs');

var queue = new Queue();

queue.enq(10);
queue.enq(5);
queue.size(); // 2
queue.peek(); // 10
queue.deq(); // 10
queue.size(); // 1
```

## API

### Queue()

Initializes a new empty `Queue`.

### Queue#deq()

Dequeues the top element of the queue.
Throws an `Error` when the queue is empty.

### Queue#enq(element)

Enqueues the `element` at the end of the queue and returns its new size.

### Queue#isEmpty()

Returns whether the queue is empty or not.

### Queue#peek()

Peeks at the top element of the queue.
Throws an `Error` when the queue is empty.

### Queue#size()

Returns the size of the queue.

## Testing

```
npm install
npm test
```

## Licence

MIT
