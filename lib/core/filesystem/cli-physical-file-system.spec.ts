// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { CliPhysicalFileSystem } from './cli-physical-file-system';
import { FsExtra } from './fs-extra';

const expect = chai.expect;

describe('CliPhysicalFileSystem should', () => {

  const fsExtraMock: TypeMoq.IMock<FsExtra> = TypeMoq.Mock.ofType<FsExtra>();
  let cliPFs: CliPhysicalFileSystem;

  beforeEach(() => {
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    fsExtraMock.setup((x: any) => x.then).returns(() => undefined);
    cliPFs = new CliPhysicalFileSystem(fsExtraMock.object);
  });

  it('create a yaml file', async () => {
    const path = '';
    const data = { key: '001', value: 'ABC'};
    const force = true;
    await cliPFs.createYamlFile(path, data, force);
  });

});
