// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { CliPhysicalFileSystem } from './cli-physical-file-system';
import { NodeFs } from './node-fs';

const expect = chai.expect;

describe('CliPhysicalFileSystem should', () => {

  const nodeFsMock: TypeMoq.IMock<NodeFs> = TypeMoq.Mock.ofType<NodeFs>();
  let cliPFs: CliPhysicalFileSystem;

  beforeEach(() => {
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    nodeFsMock.setup((x: any) => x.then).returns(() => undefined);
    cliPFs = new CliPhysicalFileSystem(nodeFsMock.object);
  });

  it('create a yaml file', async () => {
    const path = '';
    const data = { key: '001', value: 'ABC'};
    const force = true;
    await cliPFs.createYamlFile(path, data, force);
  });

});
