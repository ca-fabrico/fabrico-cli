/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable, inject } from 'inversify';
import { PhysicalFileSystem } from 'fabrico';

// modules
import { DI_TYPES } from '../../bootstrap';
import { FsExtra } from './fs-extra';

@injectable()
export class CliPhysicalFileSystem extends PhysicalFileSystem {

  private _yamlJs = require('js-yaml');
  private _path = require('path');

  /**
   * Create a new instance of InitCommand.
   */
  constructor(@inject(DI_TYPES.FsExtra) private fsExtra: FsExtra) {
    super();
  }

  pathJoin(...path: string[]): Promise<string> {
    return this.fsExtra.pathJoin(...path);
  }

  pathExists(path: string): Promise<boolean> {
    return this.fsExtra.pathExists(path);
  }

  remove(path: string): Promise<void> {
    return this.fsExtra.remove(path);
  }

  createFile(path: string, data: any, force: boolean): Promise<void> {
    return this.fsExtra.createFile(path, data, force);
  }

  appendFile(file: string | Buffer | number, data: any) {
    return this.fsExtra.appendFile(file, data);
  }

  createYamlFile(path: string, data: any, force: boolean): Promise<void> {
   return new Promise(async (resolve) => {
      const yaml = this._yamlJs.safeDump(data);
      const filePath = await this.pathJoin(path, '.fabrico.yml');
      const fileExist = await this.pathExists(filePath);
      if (fileExist) {
        if (force) {
          await this.remove(filePath);
        } else {
          throw new Error(`File already exist (${filePath}).`);
        }
      } else {
        await this.createFile(filePath, null, false);
      }
      await this.appendFile(filePath, yaml);
      resolve();
    });
  }

}
