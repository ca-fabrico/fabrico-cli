import { IBootstrapper } from '../../core/bootstrap/bootstrapper.interface';
import { Container } from 'inversify';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
