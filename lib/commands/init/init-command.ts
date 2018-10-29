import { injectable, inject } from 'inversify';
import { Metadata, DI_TYPES as CORE_DI_TYPES, Project } from 'fabrico';

@injectable()
export class InitCommand {

  /**
   * Create a new instance of InitCommand.
   */
  constructor(@inject(CORE_DI_TYPES.Project)  private project: Project) {
  }

  public async initialize(verbose: boolean, force: boolean, workingPath: string, metaData: Metadata): Promise<void> {
    await this.project.saveMetaData(force, workingPath, metaData);
  }

}
