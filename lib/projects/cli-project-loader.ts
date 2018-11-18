/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable, inject } from 'inversify';
import { Project, Metadata, PhysicalFileSystem, DI_TYPES as CORE_DI_TYPES } from 'fabrico';

@injectable()
export class CliProject extends Project {

  /**
   * Create a new instance of CliProject.
   */
  constructor(@inject(CORE_DI_TYPES.PhysicalFileSystem) private physicalFileSystem: PhysicalFileSystem) {
    super();
  }

  async saveMetaData(workingPath: string, metaData: Metadata, force: boolean): Promise<void> {
    await this.physicalFileSystem.createYamlFile(workingPath, metaData, force);
  }

}
