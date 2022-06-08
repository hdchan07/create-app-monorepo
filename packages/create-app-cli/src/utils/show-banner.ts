import clear from 'clear';
import { cyan } from 'colorette';
import consola from 'consola';
import { version } from '../../package.json';

export default function showBanner(_clear?: boolean) {
  if (_clear) {
    clear();
  }
  consola.log(cyan(`CREATE APP CLI v${version}`));
}
