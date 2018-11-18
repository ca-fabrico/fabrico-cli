/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { bootstrapper as coreBS, container } from 'fabrico';

// modules
import { bootstrapper as consoleBS } from './bootstrapper';

// Bootstrapping DI configuration of components
coreBS.onInit(container);
consoleBS.onInit(container);

export { container };
