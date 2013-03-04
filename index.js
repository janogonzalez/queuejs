/**
 * Expose `Queue`.
 */
module.exports = Queue;

/**
 * Initializes a new empty `Queue`.
 *
 * @return {Queue}
 * @api public
 */
function Queue() {
  this._elements = [];
}

/**
 * Returns whether the queue is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
Queue.prototype.isEmpty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
Queue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('Queue is empty');

  return this._elements[0];
};

/**
 * Dequeues the top element of the queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
Queue.prototype.deq = function() {
  if (this.isEmpty()) throw new Error('Queue is empty');

  return this._elements.shift();
};

/**
 * Enqueues the `element` at the end of the queue and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
Queue.prototype.enq = function(element) {
  return this._elements.push(element);
};

/**
 * Returns the size of the queue.
 *
 * @return {Number}
 * @api public
 */
Queue.prototype.size = function() {
  return this._elements.length;
};
