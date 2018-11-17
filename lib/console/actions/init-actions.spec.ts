// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { InitActions } from './init-actions';
import { InitCommand } from '../commands/init';
import { ISystem, Metadata } from 'fabrico';

const expect = chai.expect;

describe('InitActions should', () => {

  const systemMock: TypeMoq.IMock<ISystem> = TypeMoq.Mock.ofType<ISystem>();
  const initCommandMock: TypeMoq.IMock<InitCommand> = TypeMoq.Mock.ofType<InitCommand>();
  let initAct: InitActions;

  beforeEach(() => {
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    initCommandMock.setup((x: any) => x.then).returns(() => undefined);
    initAct = new InitActions(systemMock.object, initCommandMock.object);
  });

  it('invoke the init command with default values', async () => {
    const verbose = true;
    const force = true;
    const workingPath = '/c/tmp';
    const vs = '2.5';
    systemMock.setup(x => x.version).returns(() => vs);
    const username = 'Code Architects';
    systemMock.setup(x => x.username).returns(() => username);
    const answers = { };
    // Null check
    await initAct.initialize(verbose, force, workingPath, null, answers);
    const metadata1 = { version: vs, name: 'fabrico-app', description: 'This is a Fabrico app', author: username } as Metadata;
    initCommandMock.verify(x => x.initialize(verbose, force, workingPath, TypeMoq.It.isObjectWith(metadata1)), TypeMoq.Times.once());
    // Undefined check
    await initAct.initialize(verbose, force, workingPath, undefined, answers);
    const metadata2 = { version: vs, name: 'fabrico-app', description: 'This is a Fabrico app', author: username } as Metadata;
    initCommandMock.verify(x => x.initialize(verbose, force, workingPath, TypeMoq.It.isObjectWith(metadata2)), TypeMoq.Times.exactly(2));
  });

  it('invoke the init command', async () => {
    const verbose = true;
    const force = true;
    const workingPath = '/c/tmp';
    const vs = '2.5';
    const answers = { name: 'test-app', description: 'My test app.', author: 'Code Architects'};
    await initAct.initialize(verbose, force, workingPath, vs, answers);
    const metadata = { version: vs, name: answers.name, description: answers.description, author: answers.author } as Metadata;
    initCommandMock.verify(x => x.initialize(verbose, force, workingPath, TypeMoq.It.isObjectWith(metadata)), TypeMoq.Times.once());
  });

});
