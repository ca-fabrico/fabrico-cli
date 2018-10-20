"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// libs
const inversify_1 = require("inversify");
let InitQuestions = class InitQuestions {
    getRecipeNameAndDescriptionQuestions() {
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
    getRecipeAuthorQuestions() {
        return [
            {
                type: 'input',
                name: 'recipe_author',
                message: 'author:'
            }
        ];
    }
    getRecipeVersionQuestions() {
        return [
            {
                type: 'input',
                name: 'recipe_version',
                message: 'version:'
            }
        ];
    }
    getAllRecipeQuestions() {
        return [...this.getRecipeNameAndDescriptionQuestions(), ...this.getRecipeAuthorQuestions(), ...this.getRecipeVersionQuestions()];
    }
};
InitQuestions = __decorate([
    inversify_1.injectable()
], InitQuestions);
exports.InitQuestions = InitQuestions;
//# sourceMappingURL=init-questions.js.map