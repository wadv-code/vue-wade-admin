import { cac } from 'cac';
import { run } from './run';
import { colors, consola } from '@wade/node-utils';

try {
  const turboRun = cac('node-run');

  turboRun
    .command('[script]')
    .usage('Run turbo interactively.')
    .action(async (command: string) => {
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
