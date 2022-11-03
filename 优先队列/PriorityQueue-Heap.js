module.exports = function PriorityQueue({ compare } = {}) {
  this.heap = [];
  this._size = 0;

  function defaultCompare(a, b) {
    return a < b;
  }
  if (typeof compare !== 'function') compare = defaultCompare;

  function _swap(arr, a, b) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }

  function _up(heap, i) {
    while (i > 0) {
      let pIdx = Math.floor(i / 2);
      if (pIdx < 0 || compare(heap[pIdx], heap[i])) {
        break;
      }
      _swap(heap, i, pIdx);
      i = pIdx;
    }
  }

  function _down(heap, i, size) {
    while (i < size) {
      let target = i;
      let l = 2 * i;
      let r = 2 * i + 1;

      if (l < size && !compare(heap[i], heap[l])) {
        target = l;
      }

      if (r < size && !compare(heap[target], heap[r])) {
        target = r;
      }

      if (target == i) break;
      _swap(heap, target, i);
      i = target;
    }
  }

  this.push = function (val) {
    this.heap.push(val);
    this._size++;
    _up(this.heap, this._size - 1);
  };

  this.pop = function () {
    if (!this._size) return null;
    const result = this.heap[0];
    this.heap[0] = this.heap[this._size - 1];
    this._size--;
    _down(this.heap, 0, this._size);
    return result;
  };

  this.top = function () {
    if (!this._size) return null;
    return this.heap[0];
  };

  this.clear = function () {
    this.heap = [];
    this._size = 0;
  };

  this.empty = function () {
    return this._size == 0;
  };

  this.size = function () {
    return this._size;
  };

  this.toString = function () {
    return this.heap.slice(0, this._size).join(',');
  };
};
