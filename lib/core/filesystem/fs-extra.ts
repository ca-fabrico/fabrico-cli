// libs
import * as fs from 'fs-extra';
import { injectable } from 'inversify';

@injectable()
export class FsExtra {

  private _yamlJs = require('js-yaml');
  private _path = require('path');

  pathJoin(...path: string[]): Promise<string> {
    return this._path.join(path);
  }

  pathExists(path: string): Promise<boolean> {
    return fs.pathExists(path);
  }

  remove(path: string): Promise<void> {
    return fs.remove(path);
  }

  createFile(path: string, data: any, force: boolean): Promise<void> {
    return fs.createFile(path);
  }

  appendFile(file: string | Buffer | number, data: any) {
    return fs.appendFile(file, data);
  }

}
