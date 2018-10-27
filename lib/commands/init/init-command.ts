import { injectable } from 'inversify';

@injectable()
export class InitCommand {

  public async initialize(): Promise<void> {
    Promise.resolve(123)
    .then((res) => {
        throw new Error('something bad happened'); // throw a synchronous error
        return 456;
    })
    .then((res) => {
        console.log(res); // never called
        return Promise.resolve(789);
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
    });
  }

}
