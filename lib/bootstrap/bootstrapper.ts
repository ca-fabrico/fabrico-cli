// libs
import { Container } from 'inversify';
import { IBootstrapper, ISystem, IPhysicalFileSystem, ILogger, ISeedLoader, IProject,  DI_TYPES as CORE_DI_TYPES } from 'fabrico';

// modules
import { DI_TYPES } from './di-types';

import { CliSystem } from '../core/system/cli-system';
import { NodeFs } from '../core/filesystem/node-fs';
import { CliPhysicalFileSystem } from '../core/filesystem/cli-physical-file-system';
import { CliLogger } from '../core/logging/cli-logger';

import { CliSeedLoader } from '../seed/cli-seed-loader';

import { CliProject } from '../projects/cli-project-loader';

import { InitActions, GenActions } from '../console/actions';
import { InitQuestions } from '../console/questions';
import { InitCommand } from '../console/commands/init';
import { GenCommand } from '../console/commands/gen';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    // Core
    container.bind<ISystem>(CORE_DI_TYPES.System).to(CliSystem).inSingletonScope();
    container.bind<NodeFs>(DI_TYPES.NodeFs).to(NodeFs).inSingletonScope();
    container.bind<IPhysicalFileSystem>(CORE_DI_TYPES.PhysicalFileSystem).to(CliPhysicalFileSystem).inSingletonScope();
    container.bind<ILogger>(CORE_DI_TYPES.Logger).to(CliLogger).inSingletonScope();

    // Seeds
    container.bind<ISeedLoader>(CORE_DI_TYPES.SeedLoader).to(CliSeedLoader).inSingletonScope();

    // Projects
    container.bind<IProject>(CORE_DI_TYPES.Project).to(CliProject).inSingletonScope();

    // Command Line Interface
    container.bind<InitCommand>(DI_TYPES.InitCommand).to(InitCommand).inSingletonScope();
    container.bind<GenCommand>(DI_TYPES.GenCommand).to(GenCommand).inSingletonScope();

    container.bind<InitActions>(DI_TYPES.InitActions).to(InitActions).inSingletonScope();
    container.bind<InitQuestions>(DI_TYPES.InitQuestions).to(InitQuestions).inSingletonScope();
    container.bind<GenActions>(DI_TYPES.GenActions).to(GenActions).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
