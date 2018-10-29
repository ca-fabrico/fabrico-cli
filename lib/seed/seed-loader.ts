// libs
import { injectable } from 'inversify';
import { ISeedLoader, ISeedGenerator } from 'fabrico';

@injectable()
export class SeedLoader implements ISeedLoader {

  public createSeedGenerator(seedName: string): ISeedGenerator {
    const seed = require(seedName);
    const gen = new seed.CustomSeedGenerator() as ISeedGenerator;
    return gen;
  }

}
