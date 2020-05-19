export function frame(p5) {
  const topLeft = [0, 0];
  const topRight = [p5.windowWidth, 0];
  const bottomRight = [p5.windowWidth, p5.windowHeight];
  const bottomLeft = [0, p5.windowHeight];

  p5.strokeWeight(5)

  p5.quad(...[
    ...topLeft,
    ...topRight,
    ...bottomRight,
    ...bottomLeft
  ]);
}
