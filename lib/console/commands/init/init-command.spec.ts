// libs
import * as chai from 'chai';
import * as mocha from 'mocha';

// modules
import { DI_TYPES } from '../../../bootstrap/di-types';
import { container } from '../../../bootstrap/di-console-container';
import { InitCommand } from './init-command';

const expect = chai.expect;

describe('InitCommand should', () => {

  let sut: InitCommand;

  beforeEach(() => {
    sut = container.get<InitCommand>(DI_TYPES.InitCommand);
  });

  it('initilize', async () => {
    // const initilize = await sut.initialize(false, false, '', null);
    // expect(initilize).to.exist;
    // expect(initilize).to.have.property('name').to.equal('ca-repo');
  });

});
