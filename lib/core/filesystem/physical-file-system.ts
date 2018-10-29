// libs
import { IFileSystem } from 'fabrico';

export class PhysicalFileSystem implements IFileSystem {

  pathJoin(...path: string[]): Promise<string> {
    throw new Error('Method not implemented.');
  }

  pathExists(path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  remove(path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  createFile(path: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
