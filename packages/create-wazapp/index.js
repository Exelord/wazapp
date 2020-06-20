const { Command } = require('commander');
const packageJson = require('./package.json');
const child_process = require('child_process');

const program = new Command(packageJson.name);

const repo = 'https://github.com/Wazappjs/wazapp';
const path = 'packages/blueprints/nextjs';

const defaultFramework = 'nextjs';

const supportedFrameworks = {
  nextjs: createNextApp
};

program
  .version(packageJson.version)
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

function createNextApp(dir) {
  const ls = child_process.spawn('create-next-app', [dir, `-e ${repo}`, `--example-path=${path}`]);

  ls.stdout.on('data', (data) => console.log(`${data}`));
  ls.stderr.on('data', (data) => console.error(`${data}`));
}