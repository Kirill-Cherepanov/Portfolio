export const normalizeAngle = (angle: number) =>
  ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2); // rad
