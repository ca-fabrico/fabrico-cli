// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';
import { IPhysicalFileSystem, Metadata } from 'fabrico';

// modules
import { CliProject } from './cli-project-loader';

const expect = chai.expect;

describe('CliProject should', () => {

  const physicalFileSystemMock: TypeMoq.IMock<IPhysicalFileSystem> = TypeMoq.Mock.ofType<IPhysicalFileSystem>();
  let cliProj: CliProject;

  beforeEach(() => {
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    physicalFileSystemMock.setup((x: any) => x.then).returns(() => undefined);
    cliProj = new CliProject(physicalFileSystemMock.object);
  });

  it('invoke the generate command', async () => {
    const workingPath = '/c/tmp';
    const metadata = { version: '1.0.0' } as Metadata;
    const force = true;
    await cliProj.saveMetaData(workingPath, metadata, force);
    physicalFileSystemMock.verify(x => x.createYamlFile(workingPath, metadata, force), TypeMoq.Times.once());
  });

});
