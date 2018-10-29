// libs
import { injectable } from 'inversify';
import { SeedLoader, ISeedGenerator } from 'fabrico';

@injectable()
export class CliSeedLoader extends SeedLoader {

  public async loadSeed(seedName: string): Promise<any> {
    const seed = await require(seedName);
    return seed;
  }

}
