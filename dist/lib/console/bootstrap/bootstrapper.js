"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_types_1 = require("../../core/bootstrap/di-types");
const di_types_2 = require("./di-types");
const cli_logger_1 = require("../logging/cli-logger");
const init_actions_1 = require("../actions/init-actions");
const init_questions_1 = require("../questions/init-questions");
class Bootstrapper {
    onInit(container) {
        container.bind(di_types_1.DI_TYPES.Logger).to(cli_logger_1.CliLogger).inSingletonScope();
        container.bind(di_types_2.DI_TYPES.InitActions).to(init_actions_1.InitActions).inSingletonScope();
        container.bind(di_types_2.DI_TYPES.InitQuestions).to(init_questions_1.InitQuestions).inSingletonScope();
    }
}
const bootstrapper = new Bootstrapper();
exports.bootstrapper = bootstrapper;
//# sourceMappingURL=bootstrapper.js.map