// libs
import { Container } from 'inversify';
import { System, IBootstrapper, ILogger,  DI_TYPES as CORE_DI_TYPES, ISeedLoader } from 'fabrico';

// modules
import { SeedLoader } from '../seed';

// modules
import { DI_TYPES } from './di-types';
import { CliLogger } from '../core/logging/cli-logger';
import { InitCommand } from '../console/commands/init';
import { GenCommand } from '../console/commands/gen';

import { InitActions, GenActions } from '../console/actions';
import { InitQuestions } from '../console/questions';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    const pJson = require('../../package.json');
    const system = new System(pJson.version);
    container.bind<System>(CORE_DI_TYPES.System).toConstantValue(system);
    container.bind<ILogger>(CORE_DI_TYPES.Logger).to(CliLogger).inSingletonScope();
    container.bind<ISeedLoader>(CORE_DI_TYPES.SeedLoader).to(SeedLoader).inSingletonScope();

    container.bind<InitCommand>(DI_TYPES.InitCommand).to(InitCommand).inSingletonScope();
    container.bind<GenCommand>(DI_TYPES.GenCommand).to(GenCommand).inSingletonScope();

    container.bind<InitActions>(DI_TYPES.InitActions).to(InitActions).inSingletonScope();
    container.bind<InitQuestions>(DI_TYPES.InitQuestions).to(InitQuestions).inSingletonScope();
    container.bind<GenActions>(DI_TYPES.GenActions).to(GenActions).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
