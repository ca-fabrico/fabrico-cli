/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { InitQuestions } from './init-questions';

const expect = chai.expect;

describe('InitQuestions should', () => {

  let initQuestions: InitQuestions;

  beforeEach(() => {
    initQuestions = new InitQuestions();
  });

  it('get questions', async () => {
    const q1 = initQuestions.getNameAndDescriptionQuestions();
    expect(q1).length(2, 'q1 length should be equal to 2');
    expect(q1[0].validate(null, null)).to.eq(true, 'q1[0] validation failed');
    expect(q1[1].validate(null, null)).to.eq(true, 'q1[1] validation failed');
    const q2 = initQuestions.getAuthorQuestions();
    expect(q2).length(1, 'q2 length should be equal to 1');
    const q1_2 = initQuestions.getAllInitializationQuestions();
    expect(q1_2).length(3, 'q1_2 length should be equal to 3');
  });

});
