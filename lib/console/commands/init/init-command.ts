// libs
import { injectable, inject } from 'inversify';
import { Metadata, Project, DI_TYPES as CORE_DI_TYPES } from 'fabrico';

@injectable()
export class InitCommand {

  /**
   * Create a new instance of InitCommand.
   */
  constructor(@inject(CORE_DI_TYPES.Project) private project: Project) {
  }

  /**
   * Initialize the project.
   * @param verbose enable verbose logging
   * @param force force override of existing files
   * @param workingPath working path
   * @param metaData metadata of the project
   */
  public async initialize(workingPath: string, metaData: Metadata, force: boolean, verbose: boolean): Promise<void> {
    await this.project.saveMetaData(workingPath, metaData, force);
  }

}
