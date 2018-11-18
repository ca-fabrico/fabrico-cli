/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable, inject } from 'inversify';
import * as fs from 'fs-extra';
import { IPhysicalFileSystem } from 'fabrico';

// modules
import { DI_TYPES } from '../../bootstrap';

@injectable()
export class CliPhysicalFileSystem implements IPhysicalFileSystem {

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

  createFile(filePath: string, data: any, force: boolean): Promise<void> {
    return fs.createFile(filePath);
  }

  appendFile(filePath: string | Buffer | number, data: any) {
    return fs.appendFile(filePath, data);
  }

  createYamlFile(filePath: string, data: any, force: boolean): Promise<void> {
   return new Promise(async (resolve, reject) => {
      const yaml = this._yamlJs.safeDump(data);
      const fileExist = await this.pathExists(filePath);
      if (fileExist) {
        if (force) {
          await this.remove(filePath);
        } else {
          reject(new Error(`File already exist (${filePath}).`));
          return;
        }
      }
      await this.createFile(filePath, yaml, false);
      resolve();
    });
  }

}
