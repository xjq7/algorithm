const str = 'aabaaabaaac';
const substr = 'aabaaac';

function plain(str, substr) {
  for (let i = 0; i < str.length; i++) {
    let j = 0,
      _i = i;
    while (_i < str.length && j < substr.length) {
      if (str[_i] != substr[j]) {
        break;
      }
      j++;
      _i++;
    }
    if (j === substr.length) return _i - j;
  }
  return -1;
}

function Kmp(str, substr) {
  function next(substr) {
    const _next = new Array(substr.length).fill(0);
    for (let i = 1; i <= substr.length; i++) {
      for (let j = i - 1; j > 0; j--) {
        if (substr.slice(0, j) == substr.slice(i - j, i)) {
          _next[i - 1] = Math.max(_next[i - 1], j);
        }
      }
    }
    return _next;
  }
  let i = 0,
    j = 0;
  const _next = next(substr);

  while (i < str.length) {
    if (str[i] === substr[j]) {
      i++;
      j++;
    } else if (j != 0) {
      j = _next[j - 1];
    } else {
      i++;
    }
    if (j == substr.length) {
      return i - substr.length;
    }
  }
  return j == substr.length ? i - j : -1;
}

// console.time();
// console.log(str.indexOf(substr));
// console.timeEnd();

console.time();
console.log(Kmp(str, substr));
console.timeEnd();

// console.time();
// console.log(plain(str, substr));
// console.timeEnd();
