/**
 * Expose `Queue`.
 */
module.exports = Queue;

/**
 * Initializes a new empty `Queue`.
 *
 * @return {Queue}
 */
function Queue() {
  this._elements = [];
}

/**
 * Returns whether the `Queue` is empty or not.
 *
 * @return {Boolean}
 */
Queue.prototype.empty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the `Queue`.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 */
Queue.prototype.peek = function() {
  if (this.empty()) throw new Error('Queue is empty');

  return this._elements[0];
};

/**
 * Dequeues the top element of the `Queue`.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 */
Queue.prototype.deq = function() {
  if (this.empty()) throw new Error('Queue is empty');

  return this._elements.shift();
};

/**
 * Enqueues the `element` at the end of the `Queue` and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 */
Queue.prototype.enq = function(element) {
  return this._elements.push(element);
};

/**
 * Returns the size of the `Queue`.
 *
 * @return {Number}
 */
Queue.prototype.size = function() {
  return this._elements.length;
};
