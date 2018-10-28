import * as chai from 'chai';
import * as mocha from 'mocha';
import { DI_TYPES } from '../bootstrap/di-types';
import { container } from '../../console/bootstrap/di-console-container';
import { GenCommand } from './gen-command';

const expect = chai.expect;

describe('InitCommand should', () => {

  let sut: GenCommand;

  beforeEach(() => {
    sut = container.get<GenCommand>(DI_TYPES.InitCommand);
  });

  it('initilize', async () => {
    const initilize = await sut.generate();
    //expect(initilize).to.exist;
    //expect(initilize).to.have.property('name').to.equal('ca-repo');
  });

});
