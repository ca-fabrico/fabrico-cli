/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable } from 'inversify';
import { Questions, Question, Answers } from 'inquirer';

@injectable()
export class InitQuestions {

  public getNameAndDescriptionQuestions(): Question[] {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'name:',
        validate: (input, answers) => {
          return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'description:',
        validate: (input, answers) => {
          return true;
        }
      }
    ];
  }

  public getAuthorQuestions(): Question[]  {
    return [
      {
        type: 'input',
        name: 'author',
        message: 'author:'
      }
    ];
  }

  public getAllInitializationQuestions(): Questions {
    return [...this.getNameAndDescriptionQuestions(), ...this.getAuthorQuestions()];
  }

}
