/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

/**
 * Lists all the symbols used to represent types in our components DI configuration.
 */
const DI_TYPES = {
  FsExtra: Symbol('FsExtra'),
  InitCommand: Symbol('InitCommand'),
  GenCommand: Symbol('GenCommand'),
  InitActions: Symbol('InitActions'),
  InitQuestions: Symbol('InitQuestions'),
  GenActions: Symbol('GenActions')
};

export { DI_TYPES };
