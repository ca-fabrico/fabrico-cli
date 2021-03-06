/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

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
    physicalFileSystemMock.reset();
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    physicalFileSystemMock.setup((x: any) => x.then).returns(() => undefined);
    cliProj = new CliProject(physicalFileSystemMock.object);
  });

  it('save the metadata', async () => {
    const workingPath = '/c/tmp';
    const fileName = '.fabrico.yml';
    const filePath = '/c/tmp/.fabrico.yml';
    const metadata = { version: '1.0.0' } as Metadata;
    const force = true;
    physicalFileSystemMock.setup(x => x.pathJoin(workingPath, fileName)).returns(() => Promise.resolve(filePath));
    await cliProj.saveMetaData(workingPath, metadata, force);
    physicalFileSystemMock.verify(x => x.pathJoin(workingPath, fileName), TypeMoq.Times.once());
    physicalFileSystemMock.verify(x => x.createYamlFile(filePath, metadata, force), TypeMoq.Times.once());
  });

});
