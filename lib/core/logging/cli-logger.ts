// libs
import { injectable, inject } from 'inversify';
import { configure, getLogger, Configuration, Logger, LogLevelFilterAppender, shutdown } from 'log4js';
import * as path from 'path';
import * as fs from 'fs';

/*
* Logs to fs and console.
*/
@injectable()
export class CliLogger {

  public level: string;

  private logger: Logger;
  private readonly logFolderPath = path.join(process.cwd(), 'logs');
  private readonly logFilePath = path.join(this.logFolderPath, (process.pid ? process.pid.toString() : 'noid') + '.log');
  private readonly loggerConfig: Configuration = {
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

  constructor() {
    // making sure that the logs directory exists
    if (!fs.existsSync(this.logFolderPath)) {
      fs.mkdirSync(this.logFolderPath);
    }
    // configuring and getting the logger
    configure(this.loggerConfig);
    this.logger = getLogger('cli');
  }

  public log(...args: any[]): void {
    this.logger.log(...args);
  }

  public isLevelEnabled(level?: string): boolean {
    return this.logger.isLevelEnabled(level);
  }

  public isTraceEnabled(): boolean {
    return this.logger.isTraceEnabled();
  }

  public isDebugEnabled(): boolean {
    return this.logger.isDebugEnabled();
  }

  public isInfoEnabled(): boolean {
    return this.logger.isInfoEnabled();
  }

  public isWarnEnabled(): boolean {
    return this.logger.isWarnEnabled();
  }

  public isErrorEnabled(): boolean {
    return this.logger.isErrorEnabled();
  }

  public isFatalEnabled(): boolean {
    return this.logger.isFatalEnabled();
  }

  public _log(level: string, data: any): void {
    return this._log(level, data);
  }

  public addContext(key: string, value: any): void {
    this.logger.addContext(key, value);
  }

  public removeContext(key: string): void {
    this.logger.removeContext(key);
  }

  public clearContext(): void {
    this.logger.clearContext();
  }

  public trace(message: string, ...args: any[]): void {
    this.logger.trace(message, ...args);
  }

  public debug(message: string, ...args: any[]): void {
    this.logger.debug(message, ...args);
  }

  public info(message: string, ...args: any[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: any[]): void {
    this.logger.warn(message, ...args);
  }

  public error(message: string, ...args: any[]): void {
    this.logger.error(message, ...args);
  }

  public fatal(message: string, ...args: any[]): void {
    this.logger.fatal(message, ...args);
  }

  public shutdown(cb: (err: Error) => any): void {
    shutdown(cb);
  }

}
