import { IBootstrapper } from '../../core/bootstrap/bootstrapper.interface';
import { Container } from 'inversify';
import { InitCommand } from '../init';
import { DI_TYPES } from './di-types';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<InitCommand>(DI_TYPES.InitCommand).to(InitCommand).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
