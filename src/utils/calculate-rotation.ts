export function calculateRotation(rotationPercent: number) {
  const rotation = rotationPercent > 100 ? 100 : rotationPercent < 0 ? 0 : rotationPercent;

  const rightHalf = rotation >= 50 ? 180 : (rotation * 360) / 100;
  const leftHalf = rotation >= 50 ? ((rotation - 50) * 360) / 100 : 0;

  return { rightHalf, leftHalf };
}
