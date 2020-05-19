import { p5, setDefaultEnv } from '..';

let x1 = 550/4;
let y1 = 350/2;
let x2 = 550/1.35;
let y2 = 350/2;

export function movingPoints() {
  p5.point(x1, y1);
  p5.point(x2, y2);
  p5.strokeWeight(4);
  p5.line(x1, y1, x2, y2);
  p5.stroke(0);
  p5.strokeWeight(10);
  x1 = p5.cos(p5.frameCount * 0.1) * 30 + (200);
  y1 = p5.cos(p5.frameCount * 0.1) * 60 + (p5.height/2);
  x2 = p5.sin(p5.frameCount * 0.1) * -30 + (p5.width - 200);
  y2 = p5.sin(p5.frameCount * 0.1) * 60 + (p5.height/2);

  setDefaultEnv(p5);
}
