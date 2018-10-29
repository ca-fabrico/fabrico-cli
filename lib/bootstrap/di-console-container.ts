// modules
import { bootstrapper as coreBS, container } from 'fabrico';
import { bootstrapper as consoleBS } from './bootstrapper';

// Bootstrapping DI configuration of components
coreBS.onInit(container);
consoleBS.onInit(container);

export { container };
