import { p5Instance } from './index';

const FRAME_PADDING = 10;
const FRAME_WEIGHT = 2;

export function frame() {
  const topLeft = [FRAME_PADDING, FRAME_PADDING];
  const topRight = [p5Instance.windowWidth - FRAME_PADDING, FRAME_PADDING];
  const bottomRight = [p5Instance.windowWidth - FRAME_PADDING, p5Instance.windowHeight - FRAME_PADDING];
  const bottomLeft = [FRAME_PADDING, p5Instance.windowHeight - FRAME_PADDING];

  p5Instance.strokeWeight(FRAME_WEIGHT);

  p5Instance.quad(...[
    ...topLeft,
    ...topRight,
    ...bottomRight,
    ...bottomLeft
  ]);
}
