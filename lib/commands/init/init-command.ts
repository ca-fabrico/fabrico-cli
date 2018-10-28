import { injectable } from 'inversify';
import { Metadata } from 'fabrico';
import * as fs from 'fs-extra';

const yamlJs = require('js-yaml');
const path = require('path');

@injectable()
export class InitCommand {

  public async initialize(verbose: boolean, force: boolean, workingPath: string, metaData: Metadata): Promise<void> {
    const yaml = yamlJs.safeDump(Metadata);
    const filePath = path.join(workingPath, '.fabrico.yml');
    const fileExist = await fs.pathExists(filePath);
    if (fileExist) {
      if (force) {
        await fs.remove(filePath);
      } else {
        throw new Error(`File already exist (${filePath}).`);
      }
    } else {
      await fs.createFile(filePath);
    }
    await fs.appendFile(filePath, yaml);
  }

}
