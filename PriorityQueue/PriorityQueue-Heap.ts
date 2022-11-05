type Compare = (a: number, b: number) => boolean;

export default class PriorityQueue {
  private heap: number[] = [];
  private _size = 0;
  private compare = this.defaultCompare;

  constructor({ compare }: { compare: Compare }) {
    if (typeof compare === 'function') this.compare = compare;
  }

  private defaultCompare(a: number, b: number) {
    return a < b;
  }

  private _swap(arr: number[], a: number, b: number) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }

  private _up(heap: number[], i: number) {
    while (i > 0) {
      let pIdx = Math.floor(i / 2);
      if (pIdx < 0 || this.compare(heap[pIdx], heap[i])) {
        break;
      }
      this._swap(heap, i, pIdx);
      i = pIdx;
    }
  }

  private _down(heap: number[], i: number, size: number) {
    while (i < size) {
      let target = i;
      let l = 2 * i;
      let r = 2 * i + 1;

      if (l < size && !this.compare(heap[i], heap[l])) {
        target = l;
      }

      if (r < size && !this.compare(heap[target], heap[r])) {
        target = r;
      }

      if (target == i) break;
      this._swap(heap, target, i);
      i = target;
    }
  }

  public push(val: number) {
    this.heap.push(val);
    this._size++;
    this._up(this.heap, this._size - 1);
  }

  public pop() {
    if (!this._size) return null;
    const result = this.heap[0];
    this.heap[0] = this.heap[this._size - 1];
    this._size--;
    this._down(this.heap, 0, this._size);
    return result;
  }

  public top() {
    if (!this._size) return null;
    return this.heap[0];
  }

  public clear() {
    this.heap = [];
    this._size = 0;
  }

  public empty() {
    return this._size == 0;
  }

  public size() {
    return this._size;
  }

  public toString() {
    return this.heap.slice(0, this._size).join(',');
  }
}
