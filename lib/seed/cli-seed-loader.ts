/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

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
