#!/usr/bin/env node

const fs = require('fs');
const regenerate = require('regenerate');
const codePoints = require('idn-allowed-code-points/code-points');

const pattern = regenerate(codePoints).toString();
const source = `module.exports = /${ pattern }/;\n`;
fs.writeFileSync('index.js', source);
