#!/usr/bin/env node
const cli = require('../dist/cli.cjs');

process._startTime = Date.now();
cli.run();
