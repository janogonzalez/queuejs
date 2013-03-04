describe('Queue()', function() {
  it('returns an new Queue', function() {
    expect(new Queue()).to.be.a(Queue);
  });

  describe('#isEmpty()', function() {
    it('returns true when the queue is empty', function() {
      var queue = new Queue();
      expect(queue.isEmpty()).to.be(true);
    });

    it('returns false when the queue is not empty', function() {
      var queue = new Queue();
      queue.enq('jano');
      expect(queue.isEmpty()).to.be(false);
    });
  });

  describe('#peek()', function() {
    it('fails when the queue is empty', function() {
      var queue = new Queue();
      expect(function() {
        queue.peek();
      }).to.throwException('Queue is empty');
    });

    it('returns the top element of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      expect(queue.peek()).to.be('jano');
    });
  });

  describe('#deq()', function() {
    it('fails when the queue is empty', function() {
      var queue = new Queue();
      expect(function() {
        queue.deq();
      }).to.throwException('Queue is empty');
    });

    it('dequeues the top element of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      expect(queue.deq()).to.be('jano');
      expect(queue.size()).to.be(1);
    });
  });

  describe('#enq()', function() {
    it('enqueues an element at the end of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      expect(queue.peek()).to.be('jano');
      expect(queue.size()).to.be(2);
    });

    it('returns the new size of the queue', function() {
      var queue = new Queue();
      expect(queue.enq('jano')).to.be(1);
    });
  });

  describe('#size()', function() {
    it('returns 0 when the queue is empty', function() {
      var queue = new Queue();
      expect(queue.size()).to.be(0);
    });

    it('returns the size of the queue', function() {
      var queue = new Queue();
      queue.enq('jano');
      queue.enq('valentina');
      expect(queue.size()).to.be(2);
    });
  });
});
