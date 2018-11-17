// libs
import { injectable, inject } from 'inversify';
import { PhysicalFileSystem } from 'fabrico';

// modules
import { DI_TYPES } from '../../bootstrap';
import { NodeFs } from './node-fs';

export class CliPhysicalFileSystem extends PhysicalFileSystem {

  private _yamlJs = require('js-yaml');
  private _path = require('path');

  /**
   * Create a new instance of InitCommand.
   */
  constructor(@inject(DI_TYPES.NodeFs) private nodeFs: NodeFs) {
    super();
  }

  pathJoin(...path: string[]): Promise<string> {
    return this.nodeFs.pathJoin(path);
  }

  pathExists(path: string): Promise<boolean> {
    return this.nodeFs.pathExists(path);
  }

  remove(path: string): Promise<void> {
    return this.nodeFs.remove(path);
  }

  createFile(path: string, data: any, force: boolean): Promise<void> {
    return this.nodeFs.createFile(path, data, force);
  }

  appendFile(file: string | Buffer | number, data: any) {
    return this.nodeFs.appendFile(file, data);
  }

  createYamlFile(path: string, data: any, force: boolean): Promise<void> {
    return new Promise(async () => {
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
    });
  }

}
