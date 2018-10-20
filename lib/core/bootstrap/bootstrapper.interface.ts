import { Container } from 'inversify';

export interface IBootstrapper {

  onInit(container: Container): void;

}
