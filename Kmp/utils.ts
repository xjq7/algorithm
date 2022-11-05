export function randomAlpha(num: number) {
  const alpha = 'abcdefgh';
  // const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const idx = () => parseInt(String(Math.random() * alpha.length));
  return new Array(num)
    .fill(0)
    .map(() => {
      return alpha[idx()];
    })
    .join('');
}
