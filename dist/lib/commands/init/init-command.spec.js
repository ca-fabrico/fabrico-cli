"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const di_types_1 = require("../bootstrap/di-types");
const di_console_container_1 = require("../../console/bootstrap/di-console-container");
const expect = chai.expect;
describe('InitCommand should', () => {
    let sut;
    beforeEach(() => {
        sut = di_console_container_1.container.get(di_types_1.DI_TYPES.InitCommand);
    });
    it('get the recipe', () => __awaiter(this, void 0, void 0, function* () {
        const recipe = yield sut.getRecipe();
        expect(recipe).to.exist;
        expect(recipe).to.have.property('name').to.equal('ca-repo');
    }));
});
//# sourceMappingURL=init-command.spec.js.map