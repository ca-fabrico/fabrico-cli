/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { GenActions } from './gen-actions';
import { GenCommand } from '../commands/gen';

const expect = chai.expect;

describe('GenActions should', () => {

  const genCommandMock: TypeMoq.IMock<GenCommand> = TypeMoq.Mock.ofType<GenCommand>();
  let genAct: GenActions;

  beforeEach(() => {
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    genCommandMock.setup((x: any) => x.then).returns(() => undefined);
    genAct = new GenActions(genCommandMock.object);
  });

  it('invoke the generate command', async () => {
    await genAct.generate();
    genCommandMock.verify(x => x.generate(), TypeMoq.Times.once());
  });

});
