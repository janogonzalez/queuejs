var Queue = require('./index');

describe('Queue()', function() {
  it('returns an new Queue', function() {
    (new Queue()).should.be.an.instanceof(Queue);
  });

  describe('#empty', function() {
    it('returns true when the queue is empty', function() {
      var queue = new Queue();
      queue.empty().should.be.equal(true);
    });

    it('returns false when the queue is not empty', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.empty().should.be.equal(false);
    });
  });

  describe('#peek()', function() {
    it('fails when the queue is empty', function() {
      var queue = new Queue();
      (function() {
        queue.peek().should.be.equal(0);
      }).should.throwError('Queue is empty');
    });

    it('returns the top element of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      queue.peek().should.be.equal('jano');
    });
  });

  describe('#deq()', function() {
    it('fails when the queue is empty', function() {
      var queue = new Queue();
      (function() {
        queue.deq();
      }).should.throwError('Queue is empty');
    });

    it('dequeues the top element of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      queue.deq().should.be.equal('jano');
      queue.size().should.be.equal(1);
    });
  });

  describe('#enq()', function() {
    it('enqueues an element at the end of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      queue.peek().should.equal('jano');
      queue.size().should.be.equal(2);
    });

    it('returns the new size of the queue', function() {
      var queue = new Queue();
      queue.enq('jano').should.equal(1);
    });
  });

  describe('#size()', function() {
    it('returns 0 when the queue is empty', function() {
      var queue = new Queue();
      queue.size().should.be.equal(0);
    });

    it('returns the size of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      queue.size().should.be.equal(2);
    });
  });
});
