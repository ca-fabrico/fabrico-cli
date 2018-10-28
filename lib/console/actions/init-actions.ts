// lib
import chalk from 'chalk';
import { inject, injectable } from 'inversify';

import { DI_TYPES } from '../../commands/bootstrap/di-types';
import { InitCommand } from '../../commands/init/index';
import { FabricoMetadata, Target } from '../../commands/model';

@injectable()
export class InitActions {

  constructor(@inject(DI_TYPES.InitCommand) private initCommand: InitCommand) { }

  public async initialize(verbose: boolean, force: boolean, workingPath: string, version: string, answers: any): Promise<void> {
    const fabricoMetadata = new FabricoMetadata();
    fabricoMetadata.version = version;
    fabricoMetadata.name = answers.name;
    fabricoMetadata.description = answers.description;
    fabricoMetadata.author = answers.author;
    const t1 = new Target();
    t1.name = 'target 1';
    t1.path = 'target_1';
    const t2 = new Target();
    t2.name = 'target 2';
    t2.path = 'target_2';
    fabricoMetadata.targets = [ t1, t2 ];
    await this.initCommand.initialize(verbose, force, workingPath, fabricoMetadata);
  }

}
