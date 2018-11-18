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
import { GenCommand } from './gen-command';
import { ISeedLoader, ISeedGenerator } from 'fabrico';

const expect = chai.expect;

describe('GenCommand should', () => {

  const seedLoaderMock: TypeMoq.IMock<ISeedLoader> = TypeMoq.Mock.ofType<ISeedLoader>();
  const seedGenMock: TypeMoq.IMock<ISeedGenerator> = TypeMoq.Mock.ofType<ISeedGenerator>();
  let genCmd: GenCommand;

  beforeEach(() => {
    seedGenMock.reset();
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    seedGenMock.setup((x: any) => x.then).returns(() => undefined);
    genCmd = new GenCommand(seedLoaderMock.object);
  });

  it('run the generation loop', async () => {
    seedLoaderMock.setup(x => x.createSeedGenerator(TypeMoq.It.isAnyString())).returns(() => Promise.resolve<ISeedGenerator>(seedGenMock.object));
    await genCmd.generate();
    seedGenMock.verify(x => x.bootstrap(TypeMoq.It.isAny()), TypeMoq.Times.once());
    seedGenMock.verify(x => x.initialize(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.prompt(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.preGeneration(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.generate(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.conflicts(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.postGeneration(), TypeMoq.Times.once());
    seedGenMock.verify(x => x.cleanup(), TypeMoq.Times.once());
  });

});
