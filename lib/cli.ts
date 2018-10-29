// libs
import './polyfills';
import chalk from 'chalk';
import * as commander from 'commander';
import * as inquirer from 'inquirer';
import { System, DI_TYPES as CORE_DI_TYPES } from 'fabrico';

// modules - console
import { container } from './console/bootstrap/di-console-container';
import { DI_TYPES as CONSOLE_DI_TYPES } from './console/bootstrap/di-types';

import { InitQuestions } from './console/questions/init-questions';
import { InitActions } from './console/actions/init-actions';
import { GenActions } from './console/actions/gen-actions';

const system = container.get<System>(CORE_DI_TYPES.System);
const initQuestions = container.get<InitQuestions>(CONSOLE_DI_TYPES.InitQuestions);
const initActions = container.get<InitActions>(CONSOLE_DI_TYPES.InitActions);
const genActions = container.get<GenActions>(CONSOLE_DI_TYPES.GenActions);

let validCommand = true;

commander
  .version(system.version)
  .description('Fabrico is a tool compliant to the Fabrico Manifest for Enterprise Applications Development.\nThis manifest intends to outline a methodology for enterprise applications development based on enhanced Proof of Concepts and code generation.');

commander
  .command('init')
  .description('interactively initialize a new fabrico project')
  .option('-v, --verbose', 'verbose output')
  .option('-d, --defaults', 'use only defaults and not prompt you for any options')
  .option('-f, --force', 'force initialization')
  .option('--working-path <path>', 'working path')
  .action((options) => {
    const optVerbose = options.verbose || false;
    const optForce = options.force || false;
    const optDefaults = options.defaults || false;
    const optWorkingPath = options.workingPath || process.cwd();
    const questions = (optDefaults === true) ? [] : initQuestions.getAllInitializationQuestions();
    inquirer.prompt(questions)
    .then((answers) => {
      initActions.initialize(optVerbose, optForce, optWorkingPath, system.version, answers)
        .then(() => {
          console.log(chalk.yellow('Your project is now initialized \u{1F37A}\u{1F37A}\u{1F37A}'));
        })
        .catch((ex) => {
          console.log(chalk.red('Your project initialization failed \u{1F525}\u{1F525}, see above'));
        });
    });
});

commander
  .command('root')
  .description('print the root folder of the fabrico project to standard out')
  .option('-v, --verbose', 'verbose output')
  .option('--working-path <path>', 'working path')
  .action((options) => {
    console.error(chalk.red('not implemented yet!'));
    process.exit(1);
});

commander
  .command('validate')
  .description('validate the input file')
  .option('-v, --verbose', 'verbose output')
  .option('--file <name>', 'file to be validated', /^(all|fabrico)$/i, 'all')
  .option('--working-path <path>', 'working path')
  .action((options) => {
    console.log('options:' + options.file );
    console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
    process.exit(1);
});

commander
  .command('targets')
  .description('list or create targets')
  .option('-v, --verbose', 'verbose output')
  .option('-a, --add', 'add a target')
  .option('--working-path <path>', 'working path')
  .action((options) => {
    console.log('options:' + options.verbose);
    console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
    process.exit(1);
});

commander
.command('gen')
.description('start the generation process')
.option('-v, --verbose', 'verbose output')
.option('-f, --force', 'force initialization')
.option('-t, --target', 'target of the generation')
.option('--working-path <path>', 'working path')
.action((options) => {
  const optVerbose = options.verbose;
  const optForce = options.force;
  const optTarget = options.target;
  const optWorkingPath = options.workingPath;
  console.log(options);
  genActions.generate()
    .then((res) => {
      console.log(chalk.yellow('Your project is now initialized \u{1F37A}\u{1F37A}\u{1F37A}'));
      process.exit(0);
    })
    .catch((ex) => {
      console.log(chalk.red('Your project initialization failed \u{1F525}\u{1F525}, see above'));
      process.exit(0);
    });
});

commander
.command('doctor')
.description('detect potential issues with the user environment')
.option('-v, --verbose', 'verbose output')
.action((options) => {
  console.log('options:' + options.verbose + ',' + options.list);
  console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
  process.exit(1);
});

commander.action((cmd) => {
  validCommand = false;
});

if (!process.argv.slice(2).length) {
    commander.outputHelp();
    process.exit();
}

commander.parse(process.argv);

if (!validCommand) {
  commander.outputHelp();
  process.exit();
}
