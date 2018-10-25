# CLI Overview

Running `fabrico help` displays a usage summary:

```bash
$ fabrico help

  Usage: fabrico [options] [command]

  Fabrico is a tool compliant to the Fabrico Manifest for Enterprise Applications Development.
  This manifest intends to outline a methodology for enterprise applications development based on enhanced Proof of Concepts and code generation.

  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    init [options]             interactively initialize a new fabrico project
    root [options]             print the root folder of the fabrico project to standard out
    validate [options]         validate the input file
    targets [options]          list the configured targets
    gen [options]              run the generation process
    gen [options] <target>     run the generation process for the input target
    doctor [options]           run a sanity check
```
