import { injectable } from 'inversify';

@injectable()
export class InitCommand {

  public async initialize(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => { }, 500);
    });
  }

}
