import { injectable } from 'inversify';
import { Recipe } from '../../fabrico-core/model';

@injectable()
export class InitCommand {

  public async getRecipe(): Promise<Recipe> {
    return new Promise<Recipe>((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'ca-repo',
          description: 'a code architects repo',
          author: 'Code Architects',
          version: '1.0.0'
        });
      }, 500);
    });
  }

}
