// libs
import { injectable, inject } from 'inversify';
import { ISeedLoader, ISeedGenerator,  DI_TYPES as CORE_DI_TYPES } from 'fabrico';

@injectable()
export class GenCommand {

  /**
   * Create a new instance of GenCommand.
   */
  constructor(@inject(CORE_DI_TYPES.SeedLoader) private seedLoader: ISeedLoader) {
  }

  /**
   * Generate the project.
   */
  public async generate(): Promise<void> {
    const seedName = 'seed-ca-netcore-microservices';
    const gen = await this.seedLoader.createSeedGenerator(seedName);
    await gen.bootstrap(null);
    await gen.initialize();
    await gen.prompt();
    await gen.preGeneration();
    await gen.generate();
    await gen.conflicts();
    await gen.postGeneration();
    await gen.cleanup();
  }

}
