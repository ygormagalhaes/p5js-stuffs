import * as P5 from 'p5';
import { frame } from './frame';

const container = document.querySelector('#canvas');

function setConfig(p5) {

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    frame(p5);
  }

}

new P5(setConfig, container);
