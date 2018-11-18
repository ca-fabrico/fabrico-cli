/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-11-17.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import {
  CliPhysicalFileSystem
} from './cli-physical-file-system';
import {
  FsExtra
} from './fs-extra';
import { once } from 'cluster';

const expect = chai.expect;

describe('CliPhysicalFileSystem should', () => {

  const fsExtraMock: TypeMoq.IMock < FsExtra > = TypeMoq.Mock.ofType <FsExtra> ();
  let cliPFs: CliPhysicalFileSystem;

  beforeEach(() => {
    fsExtraMock.reset();
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    fsExtraMock.setup((x: any) => x.then).returns(() => undefined);
    cliPFs = new CliPhysicalFileSystem(fsExtraMock.object);
  });

  it('create a yaml file (force = true)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const path = '/c/tmp';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = true;
    fsExtraMock.setup(x => x.pathJoin(path, TypeMoq.It.isAnyString())).returns(() => Promise.resolve(filePath));
    fsExtraMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(false));
    await cliPFs.createYamlFile(path, data, force);
    fsExtraMock.verify(x => x.pathJoin(path, TypeMoq.It.isAnyString()), TypeMoq.Times.once());
    fsExtraMock.verify(x => x.createFile(filePath, yaml, false), TypeMoq.Times.once());
  });

  it('override a yaml file (force = true)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const path = '/c/tmp';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = true;
    fsExtraMock.setup(x => x.pathJoin(path, TypeMoq.It.isAnyString())).returns(() => Promise.resolve(filePath));
    fsExtraMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(true));
    await cliPFs.createYamlFile(path, data, force);
    fsExtraMock.verify(x => x.pathJoin(path, TypeMoq.It.isAnyString()), TypeMoq.Times.once());
    fsExtraMock.verify(x => x.pathExists(filePath), TypeMoq.Times.once());
    fsExtraMock.verify(x => x.remove(filePath), TypeMoq.Times.once());
    fsExtraMock.verify(x => x.createFile(filePath, yaml, false), TypeMoq.Times.once());
  });

  it('override a yaml file (force = false)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const path = '/c/tmp';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = false;
    fsExtraMock.setup(x => x.pathJoin(path, TypeMoq.It.isAnyString())).returns(() => Promise.resolve(filePath));
    fsExtraMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(true));
    try {
      await cliPFs.createYamlFile(path, data, force)
      expect(true).eq(false, 'An exception was not thrown');
    } catch (e) {
      expect(e.message).eq('File already exist (/c/tmp/.fabrico.yml).');
    }
    fsExtraMock.verify(x => x.pathJoin(path, TypeMoq.It.isAnyString()), TypeMoq.Times.once());
    fsExtraMock.verify(x => x.pathExists(filePath), TypeMoq.Times.once());
  });

});
