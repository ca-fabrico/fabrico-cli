"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules
const di_container_1 = require("../../core/bootstrap/di-container");
exports.container = di_container_1.container;
const bootstrapper_1 = require("../../core/bootstrap/bootstrapper");
const bootstrapper_2 = require("../../commands/bootstrap/bootstrapper");
const bootstrapper_3 = require("../bootstrap/bootstrapper");
// Bootstrapping DI configuration of components
bootstrapper_1.bootstrapper.onInit(di_container_1.container);
bootstrapper_2.bootstrapper.onInit(di_container_1.container);
bootstrapper_3.bootstrapper.onInit(di_container_1.container);
//# sourceMappingURL=di-console-container.js.map