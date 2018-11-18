/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { ISystem } from 'fabrico';
import os = require('os');

export class CliSystem implements ISystem {

  get version(): string {
    const pJson = require('../../../package.json');
    return pJson.version;
  }

  get username(): string {
    return os.userInfo().username;
  }

}
