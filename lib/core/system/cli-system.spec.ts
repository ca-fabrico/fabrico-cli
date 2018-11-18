/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';
import os = require('os');

// modules
import { CliSystem } from './cli-system';

const expect = chai.expect;

describe('CliSystem should', () => {

  let cliSystem: CliSystem;

  beforeEach(() => {
    cliSystem = new CliSystem();
  });

  it('load system info', async () => {
    expect(cliSystem.username).eq(os.userInfo().username);
    expect(cliSystem.version).eq(require('../../../package.json').version);
  });

});
