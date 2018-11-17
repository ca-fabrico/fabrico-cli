// libs
import { System } from 'fabrico';
import os = require('os');

export class CliSystem extends System {

  get version(): string {
    const pJson = require('../../../package.json');
    return pJson.version;
  }

  get username(): string {
    return os.userInfo().username;
  }

}
