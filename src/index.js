import * as P5 from 'p5';
import { draw } from './draw';

const container = document.querySelector('#canvas');

let p5Instance;
let canvasWidth;
let canvasHeight;

function setUtils(p5) {
  p5Instance = p5;
  canvasWidth = p5.windowWidth;
  canvasHeight = p5.windowHeight;
}

function setConfig(p5) {

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    draw();
  }

  setUtils(p5);

}

new P5(setConfig, container);

function setDefaultEnv(p5) {
  p5.noFill();
  p5.stroke(0);
  p5.strokeWeight(1);
}

export {
  p5Instance as p5,
  canvasHeight,
  canvasWidth,
  setDefaultEnv
};
