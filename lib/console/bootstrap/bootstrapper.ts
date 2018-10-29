// libs
import { Container } from 'inversify';

// modules
import { System, IBootstrapper, ILogger,  DI_TYPES as CORE_DI_TYPES } from 'fabrico';
import { DI_TYPES as CONSOLE_DI_TYPES } from './di-types';

import { CliLogger } from '../logging/cli-logger';

import { InitActions } from '../actions/init-actions';
import { InitQuestions } from '../questions/init-questions';
import { GenActions } from '../actions';

const pJson = require('../../../package.json');

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    const system = new System(pJson.version);
    container.bind<System>(CORE_DI_TYPES.System).toFactory(() => system);
    container.bind<ILogger>(CORE_DI_TYPES.Logger).to(CliLogger).inSingletonScope();
    container.bind<InitActions>(CONSOLE_DI_TYPES.InitActions).to(InitActions).inSingletonScope();
    container.bind<InitQuestions>(CONSOLE_DI_TYPES.InitQuestions).to(InitQuestions).inSingletonScope();
    container.bind<GenActions>(CONSOLE_DI_TYPES.GenActions).to(GenActions).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
