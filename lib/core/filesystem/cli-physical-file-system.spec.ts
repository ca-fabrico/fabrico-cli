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
import { CliPhysicalFileSystem } from './cli-physical-file-system';

const expect = chai.expect;

describe('CliPhysicalFileSystem should', () => {

  let cliPFsMock: TypeMoq.IMock<CliPhysicalFileSystem>;

  beforeEach(() => {
    const cliPhysicalFileSystem = new CliPhysicalFileSystem();
    cliPFsMock = TypeMoq.Mock.ofInstance<CliPhysicalFileSystem>(cliPhysicalFileSystem);
    cliPFsMock.callBase = true;
  });

  it('create a yaml file (force = true)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = true;
    cliPFsMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(false));
    cliPFsMock.setup(x => x.createFile(filePath, yaml, false)).returns(() => Promise.resolve());
    await cliPFsMock.object.createYamlFile(filePath, data, force);
    cliPFsMock.verify(x => x.createFile(filePath, yaml, false), TypeMoq.Times.once());
  });

  it('override a yaml file (force = true)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = true;
    cliPFsMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(true));
    cliPFsMock.setup(x => x.createFile(filePath, yaml, false)).returns(() => Promise.resolve());
    await cliPFsMock.object.createYamlFile(filePath, data, force);
    cliPFsMock.verify(x => x.pathExists(filePath), TypeMoq.Times.once());
    cliPFsMock.verify(x => x.remove(filePath), TypeMoq.Times.once());
    cliPFsMock.verify(x => x.createFile(filePath, yaml, false), TypeMoq.Times.once());
  });

  it('override a yaml file (force = false)', async () => {
    const filePath = '/c/tmp/.fabrico.yml';
    const data = {
      key: '001',
      value: 'ABC'
    };
    const yaml = `key: '001'\nvalue: ABC\n`;
    const force = false;
    cliPFsMock.setup(x => x.pathExists(filePath)).returns(() => Promise.resolve(true));
    try {
      await cliPFsMock.object.createYamlFile(filePath, data, force);
      expect(true).eq(false, 'An exception was not thrown');
    } catch (e) {
      expect(e.message).eq('File already exist (/c/tmp/.fabrico.yml).');
    }
    cliPFsMock.verify(x => x.pathExists(filePath), TypeMoq.Times.once());
  });

});
