"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib
const inversify_1 = require("inversify");
const log4js_1 = require("log4js");
const path = require("path");
const fs = require("fs");
/*
* Logs to fs and console.
*/
let CliLogger = class CliLogger {
    constructor() {
        this.logFolderPath = path.join(process.cwd(), 'logs');
        this.logFilePath = path.join(this.logFolderPath, (process.pid ? process.pid.toString() : 'noid') + '.log');
        this.loggerConfig = {
            appenders: {
                fileRotator: {
                    type: 'dateFile',
                    filename: this.logFilePath,
                    pattern: '.yyyy-MM-dd-hh',
                    compress: true,
                    daysToKeep: 7,
                    keepFileExt: true
                },
                console: {
                    type: 'console',
                    layout: { type: 'coloured' }
                }
            },
            categories: {
                default: { appenders: ['console'], level: 'OFF' },
                cli: {
                    appenders: ['console', 'fileRotator'],
                    level: 'info'
                }
            }
        };
        // making sure that the logs directory exists
        if (!fs.existsSync(this.logFolderPath)) {
            fs.mkdirSync(this.logFolderPath);
        }
        // configuring and getting the logger
        log4js_1.configure(this.loggerConfig);
        this.logger = log4js_1.getLogger('cli');
    }
    log(...args) {
        this.logger.log(...args);
    }
    isLevelEnabled(level) {
        return this.logger.isLevelEnabled(level);
    }
    isTraceEnabled() {
        return this.logger.isTraceEnabled();
    }
    isDebugEnabled() {
        return this.logger.isDebugEnabled();
    }
    isInfoEnabled() {
        return this.logger.isInfoEnabled();
    }
    isWarnEnabled() {
        return this.logger.isWarnEnabled();
    }
    isErrorEnabled() {
        return this.logger.isErrorEnabled();
    }
    isFatalEnabled() {
        return this.logger.isFatalEnabled();
    }
    _log(level, data) {
        return this._log(level, data);
    }
    addContext(key, value) {
        this.logger.addContext(key, value);
    }
    removeContext(key) {
        this.logger.removeContext(key);
    }
    clearContext() {
        this.logger.clearContext();
    }
    trace(message, ...args) {
        this.logger.trace(message, ...args);
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    fatal(message, ...args) {
        this.logger.fatal(message, ...args);
    }
    shutdown(cb) {
        log4js_1.shutdown(cb);
    }
};
CliLogger = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CliLogger);
exports.CliLogger = CliLogger;
//# sourceMappingURL=cli-logger.js.map