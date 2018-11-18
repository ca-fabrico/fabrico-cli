/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';
import { IRuntime } from 'fabrico';

// modules
import { CliSeedLoader } from './cli-seed-loader';
import { resolve } from 'path';

const expect = chai.expect;

describe('CliSeedLoader should', () => {

  const runtimeMock: TypeMoq.IMock<IRuntime> = TypeMoq.Mock.ofType<IRuntime>();
  let cliSeedLoader: CliSeedLoader;

  beforeEach(() => {
    cliSeedLoader = new CliSeedLoader(runtimeMock.object);
  });

  it('load the seed', async () => {
  });

});
