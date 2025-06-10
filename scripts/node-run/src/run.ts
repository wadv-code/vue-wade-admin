import {
  cancel,
  intro,
  isCancel,
  multiselect,
  outro,
  select,
} from '@clack/prompts';
import { colors, execaCommand, getPackages } from '@wade/node-utils';

interface RunOptions {
  command?: string;
}

export async function run(options: RunOptions) {
  const { command } = options;
  const { BASE_DEV_SINGLE } = process.env;
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

  if (BASE_DEV_SINGLE) {
    let projectPkg: symbol | string;
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
    console.log('projectPkg', projectPkg);

    execaCommand(`pnpm --filter=${projectPkg} run ${command}`, {
      stdio: 'inherit',
    });
  } else {
    let projectPkg: symbol | string[];
    if (projectPkgs.length > 1) {
      intro(colors.inverse(`Start run ${command}`));
      projectPkg = await multiselect({
        message: `Pick multiple projects to run [${command}]:`,
        options: projectPkgs.map((item) => ({
          label: item?.packageJson.name,
          value: item?.packageJson.name,
          // biome-ignore lint/complexity/useLiteralKeys: <explanation>
          hint: item?.packageJson['description'],
        })),
      });
      if (isCancel(projectPkg) || !projectPkg || !projectPkg.length) {
        cancel('👋 Operation cancelled');
        process.exit(0);
      }
    } else {
      projectPkg = [projectPkgs[0]?.packageJson?.name ?? ''];
    }

    if (!projectPkg || !projectPkg.length) {
      console.error('👋 No project found');
      process.exit(1);
    } else {
      outro('You have completed your selection.');
    }

    const projectCommand = projectPkg.map((pkg) => `--filter=${pkg}`).join(' ');

    execaCommand(`pnpm dev:all ${projectCommand}`, {
      stdio: 'inherit',
    });
  }
}
