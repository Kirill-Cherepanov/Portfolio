export function isAngleInAngleSpan(span: [number, number], angle: number) {
  if (span[0] < span[1]) {
    return angle >= span[0] === angle <= span[1];
  }
  return (
    angle >= span[0] - 2 * Math.PI === angle <= span[1] ||
    angle >= span[0] === angle <= span[1] + 2 * Math.PI
  );
}
