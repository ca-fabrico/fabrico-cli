/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable } from 'inversify';
import { ISeedDescriptor, SeedLoader, ISeedGenerator } from 'fabrico';

@injectable()
export class CliSeedLoader extends SeedLoader {

  public async loadSeed(seedName: string): Promise<ISeedDescriptor> {
    const seed = await require(seedName);
    const seedDescriptor = seed.default as ISeedDescriptor;
    super.boostrap(seedDescriptor);
    return seedDescriptor;
  }

}
