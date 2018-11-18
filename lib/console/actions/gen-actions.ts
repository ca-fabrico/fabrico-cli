/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import chalk from 'chalk';
import { inject, injectable } from 'inversify';

// modules
import { DI_TYPES } from '../../bootstrap';
import { GenCommand } from '../commands/gen';

@injectable()
export class GenActions {

  constructor(@inject(DI_TYPES.GenCommand) private genCommand: GenCommand) { }

  public async generate(): Promise<void> {
    await this.genCommand.generate();
  }

}
