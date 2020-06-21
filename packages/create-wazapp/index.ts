#!/usr/bin/env node

import { Command } from 'commander';
import { name as packageName, version as packageVersion } from './package.json';
import child_process from 'child_process';

const program = new Command(packageName);

const defaultFramework = 'nextjs';

const supportedFrameworks = {
  nextjs: createNextApp
} as { [key: string]: (name: string) => void; };

program
  .version(packageVersion)
  .arguments('<project-directory>')
  .option('-f, --framework <framework>', 'Available frameworks: nextjs')
  .action((dir) => {
    const framework = program.framework || defaultFramework
    const frameworkFn = supportedFrameworks[framework];
    
    if (!frameworkFn) throw new Error('Framework is not supported!');
    
    frameworkFn(dir);
  })
  .allowUnknownOption()
  .parse(process.argv);

function createNextApp(name: string) {
  const repo = 'https://github.com/Wazappjs/wazapp';
  const path = 'blueprints/nextjs';

  child_process.spawn(
    'yarn',
    [
      'create', 'next-app',
      name,
      `-e`, repo,
      `--example-path`, path
    ],
    {
      stdio: [process.stdin, process.stdout, process.stderr]
    }
  );
}