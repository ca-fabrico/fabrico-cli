// libs
import { injectable } from 'inversify';
import { Questions, Question, Answers } from 'inquirer';

@injectable()
export class InitQuestions {

  public getRecipeNameAndDescriptionQuestions(): Question[] {
    return [
      {
        type: 'input',
        name: 'recipe_name',
        message: 'recipe name:',
        validate: (input, answers) => {
          return true;
        }
      },
      {
        type: 'input',
        name: 'recipe_description',
        message: 'description:',
        validate: (input, answers) => {
          return true;
        }
      }
    ];
  }

  public getRecipeAuthorQuestions(): Question[]  {
    return [
      {
        type: 'input',
        name: 'recipe_author',
        message: 'author:'
      }
    ];
  }

  public getRecipeVersionQuestions(): Question[]  {
    return [
      {
        type: 'input',
        name: 'recipe_version',
        message: 'version:'
      }
    ];
  }

  public getAllRecipeQuestions(): Questions {
    return [...this.getRecipeNameAndDescriptionQuestions(), ...this.getRecipeAuthorQuestions(), ...this.getRecipeVersionQuestions()];
  }

}
