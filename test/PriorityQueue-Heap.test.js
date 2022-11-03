const PriorityQueueHeap = require('../优先队列/PriorityQueue-Heap');
const assert = require('assert');

function testPriorityQueueHeap(input) {
  const _output = [];
  const q = new PriorityQueueHeap({ compare: (a, b) => a > b });

  let prev = null;
  input.forEach((str) => {
    switch (str) {
      case 'push':
        prev = str;
        break;
      case 'pop':
        _output.push(q.pop());
        break;
      case 'top':
        _output.push(q.top());
        break;
      case 'empty':
        _output.push(q.empty());
        break;
      case 'size':
        _output.push(q.size());
        break;
      case 'clear':
        q.clear();
        break;
      default:
        if (prev === 'push') {
          q.push(str);
          _output.push(true);
        } else {
          prev = null;
        }
    }
  });
  return _output;
}

describe('PriorityQueue-Heap', function () {
  it('should return true ', function () {
    assert.deepEqual(
      testPriorityQueueHeap([
        'push',
        1,
        'top',
        'push',
        2,
        'top',
        'push',
        5,
        'push',
        4,
        'push',
        3,
        'top',
        'pop',
        'top',
      ]),
      [true, 1, true, 2, true, true, true, 5, 5, 4]
    );
    assert.deepEqual(
      testPriorityQueueHeap([
        'pop',
        'top',
        'push',
        99,
        'top',
        'push',
        5,
        'top',
        'pop',
        'top',
      ]),
      [null, null, true, 99, true, 99, 99, 5]
    );
    assert.deepEqual(
      testPriorityQueueHeap([
        'push',
        3,
        'push',
        2,
        'top',
        'clear',
        'top',
        'push',
        5,
        'push',
        10,
        'pop',
        'pop',
        'size',
      ]),
      [true, true, 3, null, true, true, 10, 5, 0]
    );
  });
});
