import { injectable } from 'inversify';
import { SeedGenerator } from 'fabrico';

@injectable()
export class GenCommand {

  public async generate(): Promise<void> {
    const seed = require('seed-ca-netcore-microservices');
    const gen = new seed.SeedGenerator(':)');
    const x = gen.foo3();
    console.log(gen.foo());
    await Promise.resolve()
      .then((res) => {
          console.log(res); // never called
          return Promise.resolve();
      })
      .catch((err) => {
          console.log(err.message); // something bad happened
      });
  }

}
