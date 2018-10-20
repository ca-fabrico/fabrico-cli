// modules
import { container } from '../../core/bootstrap/di-container';
import { bootstrapper as coreBS } from '../../core/bootstrap/bootstrapper';
import { bootstrapper as componentBS } from '../../commands/bootstrap/bootstrapper';
import { bootstrapper as consoleBS } from '../bootstrap/bootstrapper';

// Bootstrapping DI configuration of components
coreBS.onInit(container);
componentBS.onInit(container);
consoleBS.onInit(container);

export { container };
