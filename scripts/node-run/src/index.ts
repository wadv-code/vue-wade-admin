import { colors, consola } from '@wade/node-utils';
import { cac } from 'cac';
import { run } from './run';

try {
  const turboRun = cac('node-run');

  turboRun
    .command('[script]')
    .usage('Run turbo interactively.')
    .action(async (command: string) => {
      console.log('command', command);
      run({ command });
    });

  // Invalid command
  turboRun.on('command:*', () => {
    consola.error(colors.red('Invalid command!'));
    process.exit(1);
  });

  turboRun.usage('node-run');
  turboRun.help();
  turboRun.parse();
} catch (error) {
  consola.error(error);
  process.exit(1);
}
