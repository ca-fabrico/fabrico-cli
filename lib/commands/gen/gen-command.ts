// libs
import { injectable } from 'inversify';

// modules
import { ISeedLoader, ISeedGenerator } from 'fabrico';

@injectable()
export class GenCommand {

  /**
   * Create a new instance of GenCommand.
   */
  constructor(private seedLoader: ISeedLoader) {
  }

  /**
   * Generate the project.
   */
  public async generate(): Promise<void> {
    const seedName = 'seed-ca-netcore-microservices';
    const gen = this.seedLoader.createSeedGenerator(seedName);
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
