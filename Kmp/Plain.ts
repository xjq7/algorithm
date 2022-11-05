export default function Plain(str: string, substr: string) {
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
    if (j == substr.length) {
      return _i - j;
    }
  }
  return -1;
}
