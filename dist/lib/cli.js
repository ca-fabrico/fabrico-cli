"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// libs
require("./polyfills");
const chalk_1 = require("chalk");
const commander = require("commander");
const inquirer = require("inquirer");
// modules - console
const di_console_container_1 = require("./console/bootstrap/di-console-container");
const di_types_1 = require("./console/bootstrap/di-types");
const initQuestions = di_console_container_1.container.get(di_types_1.DI_TYPES.InitQuestions);
const initActions = di_console_container_1.container.get(di_types_1.DI_TYPES.InitActions);
let validCommand = true;
commander
    .version('0.0.0')
    .description('The fabrico-core command line interface (CLI) is a tool to be used for configuring and interacting with fabrico-core. This tool can be used from the command line / shell of various operating systems.');
commander
    .command('init')
    .description('interactively initialize a new fabrico-core project')
    .option('-f, --force', 'use only defaults and not prompt you for any options')
    .action((options) => {
    inquirer.prompt(initQuestions.getAllRecipeQuestions())
        .then((answers) => {
        initActions.createRecipe(answers)
            .then(() => {
            console.log(chalk_1.default.yellow('your project is now initialized \u{1F37A}\u{1F37A}\u{1F37A}'));
        })
            .catch((ex) => {
            console.log(chalk_1.default.red('your project initialization failed \u{1F525}\u{1F525}, see above'));
        });
    });
});
commander
    .command('root')
    .description('print the root folder of the fabrico-core project to standard out')
    .option('-v, --verbose', 'verbose output')
    .action((options) => {
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('validate')
    .description('validate the input file')
    .option('-v, --verbose', 'verbose output')
    .option('-f --file <name>', 'file to be validated', /^(all|bake|recipe)$/i, 'all')
    .action((options) => {
    console.log('options:' + options.file);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('pipeline')
    .description('list the configured pipelines')
    .option('-v, --verbose', 'verbose output')
    .option('-l, --list', 'list configured pipelines')
    .action((options) => {
    console.log('options:' + options.verbose + ',' + options.list);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('pipeline <name>')
    .description('run the input pipeline')
    .option('-v, --verbose', 'verbose output')
    .action((command, options) => {
    console.error('command:' + command);
    console.log('options:' + options.verbose);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('components')
    .description('list the configured components')
    .option('-v, --verbose', 'verbose output')
    .option('-l, --list', 'list configured pipelines')
    .action((options) => {
    console.log('options:' + options.verbose + ',' + options.list);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('artifacts')
    .description('list the configured artifacts')
    .option('-v, --verbose', 'verbose output')
    .option('-l, --list', 'list configured pipelines')
    .action((options) => {
    console.log('options:' + options.verbose + ',' + options.list);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('run')
    .description('list the configured commands')
    .option('-v, --verbose', 'verbose output')
    .option('-l, --list', 'list configured commands')
    .action((options) => {
    console.log('options:' + options.verbose + ',' + options.list);
    console.error(chalk_1.default.red('not implemented yet!'));
    process.exit(1);
});
commander
    .command('run <command>')
    .description('run the input command')
    .option('-v, --verbose', 'verbose output')
    .action((command, options) => {
    console.error('command:' + command);
    console.log('options:' + options.verbose);
    console.error(chalk_1.default.red('not implemented yet!'));
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
//# sourceMappingURL=cli.js.map