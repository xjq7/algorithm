export function randomAlpha(num: number, alphannum: number = 26) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.slice(0, alphannum);
  const idx = () => parseInt(String(Math.random() * alpha.length));
  return new Array(num)
    .fill(0)
    .map(() => {
      return alpha[idx()];
    })
    .join('');
}
