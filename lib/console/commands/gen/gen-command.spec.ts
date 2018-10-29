// libs
import * as chai from 'chai';
import * as mocha from 'mocha';

// modules
import { DI_TYPES } from '../bootstrap/di-types';
import { GenCommand } from './gen-command';
import { container } from '../../console/bootstrap/di-console-container';

const expect = chai.expect;

describe('GenCommand should', () => {

  let sut: GenCommand;

  beforeEach(() => {
    sut = container.get<GenCommand>(DI_TYPES.InitCommand);
  });

  it('initilize', async () => {
    // const generate = await sut.generate();
  });

});
