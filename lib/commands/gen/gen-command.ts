import { injectable } from 'inversify';
import { ISeedGenerator } from 'fabrico';

@injectable()
export class GenCommand {

  public async generate(): Promise<void> {
    const seed = 'seed-ca-netcore-microservices';
    const gen = new (require(seed)).SeedGenerator() as ISeedGenerator;
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
