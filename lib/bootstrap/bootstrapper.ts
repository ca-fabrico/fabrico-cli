// libs
import { Container } from 'inversify';
import { IBootstrapper, ISystem, IPhysicalFileSystem, ILogger,  DI_TYPES as CORE_DI_TYPES, ISeedLoader } from 'fabrico';

// modules
import { DI_TYPES } from './di-types';
import { CliSystem } from '../core/system/cli-system';
import { CliPhysicalFileSystem } from '../core/filesystem/cli-physical-file-system';
import { CliLogger } from '../core/logging/cli-logger';
import { CliSeedLoader } from '../seed/cli-seed-loader';

import { InitCommand } from '../console/commands/init';
import { GenCommand } from '../console/commands/gen';

import { InitActions, GenActions } from '../console/actions';
import { InitQuestions } from '../console/questions';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<ISystem>(CORE_DI_TYPES.System).to(CliSystem).inSingletonScope();
    container.bind<IPhysicalFileSystem>(CORE_DI_TYPES.PhysicalFileSystem).to(CliPhysicalFileSystem).inSingletonScope();
    container.bind<ILogger>(CORE_DI_TYPES.Logger).to(CliLogger).inSingletonScope();
    container.bind<ISeedLoader>(CORE_DI_TYPES.SeedLoader).to(CliSeedLoader).inSingletonScope();

    container.bind<InitCommand>(DI_TYPES.InitCommand).to(InitCommand).inSingletonScope();
    container.bind<GenCommand>(DI_TYPES.GenCommand).to(GenCommand).inSingletonScope();

    container.bind<InitActions>(DI_TYPES.InitActions).to(InitActions).inSingletonScope();
    container.bind<InitQuestions>(DI_TYPES.InitQuestions).to(InitQuestions).inSingletonScope();
    container.bind<GenActions>(DI_TYPES.GenActions).to(GenActions).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
