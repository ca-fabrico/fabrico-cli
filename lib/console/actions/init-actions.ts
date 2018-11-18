/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import chalk from 'chalk';
import { inject, injectable } from 'inversify';
import { System, DI_TYPES as CORE_DI_TYPES } from 'fabrico';

// modules
import { DI_TYPES } from '../../bootstrap/di-types';
import { InitCommand } from '../commands/init/index';
import { Metadata, Target } from 'fabrico';

@injectable()
export class InitActions {

  constructor(@inject(CORE_DI_TYPES.System) private system: System, @inject(DI_TYPES.InitCommand) private initCommand: InitCommand) { }

  public async initialize(workingPath: string, version: string, answers: any, force: boolean, verbose: boolean): Promise<void> {
    const metaData = new Metadata();
    metaData.version = version || this.system.version;
    metaData.name = answers.name || 'fabrico-app';
    metaData.description = answers.description || 'This is a Fabrico app';
    metaData.author = answers.author || this.system.username;
    await this.initCommand.initialize(workingPath, metaData, force, verbose);
  }

}
