// libs
import './polyfills';
import chalk from 'chalk';
import * as commander from 'commander';
import * as inquirer from 'inquirer';

// modules - console
import { container } from './console/bootstrap/di-console-container';
import { DI_TYPES as CONSOLE_DI_TYPES } from './console/bootstrap/di-types';

import { InitQuestions } from './console/questions/init-questions';
import { InitActions } from './console/actions/init-actions';

const pjson = require('../package.json');

const initQuestions = container.get<InitQuestions>(CONSOLE_DI_TYPES.InitQuestions);
const initActions = container.get<InitActions>(CONSOLE_DI_TYPES.InitActions);

let validCommand = true;

commander
  .version(pjson.version)
  .description('Fabrico is a tool compliant to the Fabrico Manifest for Enterprise Applications Development.\nThis manifest intends to outline a methodology for enterprise applications development based on enhanced Proof of Concepts and code generation.');

commander
  .command('init')
  .description('interactively initialize a new fabrico project')
  .option('-v, --verbose', 'verbose output')
  .option('-d, --default', 'use only defaults and not prompt you for any options')
  .option('-f, --force', 'force initialization')
  .option('--target-path', 'target path')
  .action((options) => {
    const questions = (options.default === true) ? [] : initQuestions.getAllInitializationQuestions();
    inquirer.prompt(questions)
    .then((answers) => {
      initActions.initialize(answers)
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
  .option('--target-path', 'target path')
  .action((options) => {
    console.error(chalk.red('not implemented yet!'));
    process.exit(1);
});

commander
  .command('validate')
  .description('validate the input file')
  .option('-v, --verbose', 'verbose output')
  .option('--file <name>', 'file to be validated', /^(all|fabrico)$/i, 'all')
  .option('--target-path', 'target path')
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
  .option('--target-path', 'target path')
  .action((options) => {
    console.log('options:' + options.verbose);
    console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
    process.exit(1);
});

commander
.command('targets <name>')
.description('show the input target info')
.option('-v, --verbose', 'verbose output')
.option('--target-path', 'target path')
.action((command, options) => {
  console.error('command:' + command);
  console.log('options:' + options.verbose);
  console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
  process.exit(1);
});

commander
.command('gen')
.description('start the generation process')
.option('-v, --verbose', 'verbose output')
.option('-f, --force', 'force initialization')
.option('--target-path', 'target path')
.action((options) => {
  console.log('options:' + options.verbose + ',' + options.force);
  console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
  process.exit(1);
});

commander
.command('gen <target>')
.description('start the generation process for the input target')
.option('-v, --verbose', 'verbose output')
.option('-f, --force', 'force initialization')
.option('--target-path', 'target path')
.action((command, options) => {
  console.error('command:' + command);
  console.log('options:' + options.verbose);
  console.error(chalk.red('not implemented yet! \u{1F525}\u{1F525}'));
  process.exit(1);
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
