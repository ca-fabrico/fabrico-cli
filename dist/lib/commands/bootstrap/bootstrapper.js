"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("../init");
const di_types_1 = require("./di-types");
class Bootstrapper {
    onInit(container) {
        container.bind(di_types_1.DI_TYPES.InitCommand).to(init_1.InitCommand).inSingletonScope();
    }
}
const bootstrapper = new Bootstrapper();
exports.bootstrapper = bootstrapper;
//# sourceMappingURL=bootstrapper.js.map