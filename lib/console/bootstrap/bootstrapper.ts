// libs
import { Container } from 'inversify';

// modules
import { IBootstrapper } from '../../core/bootstrap/bootstrapper.interface';
import { DI_TYPES as CORE_DI_TYPES } from '../../core/bootstrap/di-types';
import { DI_TYPES as CONSOLE_DI_TYPES } from './di-types';

import { ILogger } from '../../core/logging/logger.interface';
import { CliLogger } from '../logging/cli-logger';

import { InitActions } from '../actions/init-actions';
import { InitQuestions } from '../questions/init-questions';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<ILogger>(CORE_DI_TYPES.Logger).to(CliLogger).inSingletonScope();
    container.bind<InitActions>(CONSOLE_DI_TYPES.InitActions).to(InitActions).inSingletonScope();
    container.bind<InitQuestions>(CONSOLE_DI_TYPES.InitQuestions).to(InitQuestions).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
