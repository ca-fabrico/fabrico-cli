// lib
import chalk from 'chalk';
import { inject, injectable } from 'inversify';

import { DI_TYPES } from '../../commands/bootstrap/di-types';
import { InitCommand } from '../../commands/init/index';

@injectable()
export class InitActions {

  constructor(
    @inject(DI_TYPES.InitCommand) private initCommand: InitCommand
  ) { }

  public async createRecipe(answers: any): Promise<void> {
    const recipe = await this.initCommand.getRecipe();
  }

}
