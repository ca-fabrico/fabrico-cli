/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';
import { IProject, Metadata } from 'fabrico';

// modules
import { InitCommand } from './init-command';

const expect = chai.expect;

describe('InitCommand should', () => {

  const projectMock: TypeMoq.IMock<IProject> = TypeMoq.Mock.ofType<IProject>();
  let initCmd: InitCommand;

  beforeEach(() => {
    projectMock.reset();
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    projectMock.setup((x: any) => x.then).returns(() => undefined);
    initCmd = new InitCommand(projectMock.object);
  });

  it('initialize and save the metadata', async () => {
    const force = true;
    projectMock.setup(x => x.saveMetaData('', null, force)).returns(() => Promise.resolve());
    const verbose = true;
    const workingPath = '/c/tmp';
    const metaData = new Metadata();
    await initCmd.initialize(workingPath, metaData, force, verbose);
    projectMock.verify(x => x.saveMetaData(workingPath, metaData, force), TypeMoq.Times.once());
  });

});
