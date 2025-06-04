import { cancel, intro, isCancel, outro, select } from '@clack/prompts';
import { colors, execaCommand, getPackages } from '@wade/node-utils';

interface RunOptions {
  command?: string;
}

export async function run(options: RunOptions) {
  const { command } = options;
  if (!command) {
    console.error('Please enter the command to run');
    process.exit(1);
  }
  const { packages } = await getPackages();

  // 只显示有对应命令的包
  const projectPkgs = packages.filter((pkg) => {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (pkg?.packageJson as Record<string, any>)?.scripts?.[command];
  });

  let projectPkg: string | symbol;
  if (projectPkgs.length > 1) {
    intro(colors.inverse(`Start run ${command}`));
    projectPkg = await select({
      message: `Pick a project run [${command}]:`,
      options: projectPkgs.map((item) => ({
        label: item?.packageJson.name,
        value: item?.packageJson.name,
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        hint: item?.packageJson['description'],
      })),
    });
    if (isCancel(projectPkg) || !projectPkg) {
      cancel('👋 Operation cancelled');
      process.exit(0);
    }
  } else {
    projectPkg = projectPkgs[0]?.packageJson?.name ?? '';
  }

  if (!projectPkg) {
    console.error('👋 No project found');
    process.exit(1);
  } else {
    outro('You have completed your selection.');
  }

  execaCommand(`pnpm --filter=${projectPkg} run ${command}`, {
    stdio: 'inherit',
  });
}
