// libs
import { IBootstrapper } from 'fabrico';

// modules
import { Container } from 'inversify';
import { InitCommand } from '../init';
import { GenCommand } from '../gen';
import { DI_TYPES } from './di-types';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<InitCommand>(DI_TYPES.InitCommand).to(InitCommand).inSingletonScope();
    container.bind<GenCommand>(DI_TYPES.GenCommand).to(GenCommand).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
