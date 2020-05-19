import { setDefaultEnv } from '..';

export function drawAndSetDefaultEnv(task) {
  task();
  setDefaultEnv();
}
