import { frame } from './frame';
import { movingPoints } from './drawings/moving-points';
import { p5 } from '.';

export function draw() {
  p5.background(255);
  frame();
  movingPoints();
}
