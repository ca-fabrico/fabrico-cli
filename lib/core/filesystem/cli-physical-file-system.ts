// libs
import { PhysicalFileSystem } from 'fabrico';
import * as fs from 'fs-extra';

export class CliPhysicalFileSystem extends PhysicalFileSystem {

  private _yamlJs = require('js-yaml');
  private _path = require('path');

  pathJoin(...path: string[]): Promise<string> {
    return this._path.join(path, '.fabrico.yml');
  }

  pathExists(path: string): Promise<boolean> {
    return fs.pathExists(path);
  }

  remove(path: string): Promise<void> {
    return fs.remove(path);
  }

  createFile(path: string, data: any, force: boolean): Promise<void> {
    throw new Error('Method not implemented.');
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
        await fs.createFile(filePath);
      }
      await fs.appendFile(filePath, yaml);
    });
  }

}
