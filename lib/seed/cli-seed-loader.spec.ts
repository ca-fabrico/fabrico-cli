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
import { CliSeedLoader } from './cli-seed-loader';
import { resolve } from 'path';

const expect = chai.expect;

describe('CliSeedLoader should', () => {

  let cliSeedLoader: CliSeedLoader;

  beforeEach(() => {
    cliSeedLoader = new CliSeedLoader();
  });

  it('load the seed', async () => {
    try {
      await cliSeedLoader.loadSeed('fs');
      expect(true).eq(false, 'An exception was not thrown');
    } catch (e) {
      expect(e.message).eq('An exception was not thrown: expected true to equal false');
    }
  });

});
