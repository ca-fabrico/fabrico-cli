import * as chai from 'chai';
import * as mocha from 'mocha';
import { DI_TYPES } from '../bootstrap/di-types';
import { container } from '../../console/bootstrap/di-console-container';
import { InitCommand } from './init-command';

const expect = chai.expect;

describe('InitCommand should', () => {

  let sut: InitCommand;

  beforeEach(() => {
    sut = container.get<InitCommand>(DI_TYPES.InitCommand);
  });

  it('get the recipe', async () => {
    const recipe = await sut.getRecipe();
    expect(recipe).to.exist;
    expect(recipe).to.have.property('name').to.equal('ca-repo');
  });

});
