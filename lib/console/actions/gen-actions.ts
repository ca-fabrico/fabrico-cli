// libs
import chalk from 'chalk';
import { inject, injectable } from 'inversify';

// modules
import { DI_TYPES } from '../../commands/bootstrap/di-types';
import { GenCommand } from '../../commands/gen';

@injectable()
export class GenActions {

  constructor(@inject(DI_TYPES.GenCommand) private genCommand: GenCommand) { }

  public async generate(): Promise<void> {
    await this.genCommand.generate();
  }

}
