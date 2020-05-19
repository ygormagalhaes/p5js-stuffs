import { p5 } from '..';
import { getUsefulWidth, getCanvasCenter } from '../frame';


function drawCircles() {
  let diameter = getUsefulWidth();
  let distance = 200;
  while (diameter >= 10 && distance >= 2) {
    p5.circle(...getCanvasCenter(), diameter);
    distance *= 0.8;
    diameter -= distance;
  }
  return diameter;
}

function drawFinalBlackCircle(diameter) {
  p5.fill(0);
  p5.circle(...getCanvasCenter(), diameter);
  p5.noFill();
}

export function innerCircles() {
  p5.strokeWeight(1);
  p5.noFill();

  let diameter = drawCircles();
  drawFinalBlackCircle(diameter);
}
