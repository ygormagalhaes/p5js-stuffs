import { p5 } from '..';
import { getInitialVerticalPoint, getFinalVerticalPoint } from '../frame';

export function drawInfiniteHorizontalLine(yPoint, strokeWeight = 1) {
  p5.strokeWeight(strokeWeight);
  p5.line(getInitialVerticalPoint(), yPoint, getFinalVerticalPoint(), yPoint);
}

export function drawInfiniteVerticalLine(xPoint, strokeWeight = 1) {
  p5.strokeWeight(strokeWeight);
  p5.line(xPoint, getInitialVerticalPoint(), xPoint, getFinalVerticalPoint());
}
