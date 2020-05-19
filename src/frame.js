import { p5 } from './index';

const FRAME_PADDING = 10;
const FRAME_WEIGHT = 20;

export function frame() {
  const topLeft = [FRAME_PADDING, FRAME_PADDING];
  const topRight = [p5.windowWidth - FRAME_PADDING, FRAME_PADDING];
  const bottomRight = [p5.windowWidth - FRAME_PADDING, p5.windowHeight - FRAME_PADDING];
  const bottomLeft = [FRAME_PADDING, p5.windowHeight - FRAME_PADDING];

  p5.strokeWeight(FRAME_WEIGHT);

  p5.quad(...[
    ...topLeft,
    ...topRight,
    ...bottomRight,
    ...bottomLeft
  ]);
}

export function getUsefulHeight() {
  return p5.windowHeight - 2 * FRAME_PADDING - 2 * FRAME_WEIGHT / 2;
}

export function getUsefulWidth() {
  return p5.windowWidth - 2 * FRAME_PADDING - 2 * FRAME_WEIGHT / 2;
}

export function getCanvasCenter() {
  return [p5.windowWidth / 2, p5.windowHeight / 2];
}

export function getInitialVerticalPoint() {
  return 0 + FRAME_WEIGHT;
}

export function getFinalVerticalPoint() {
  return p5.windowWidth - FRAME_WEIGHT;
}

export function getInitialHorizontalPoint() {
  return 0 + FRAME_WEIGHT;
}

export function getFinalHorizontalPoint() {
  return p5.windowHeight - FRAME_WEIGHT;
}
