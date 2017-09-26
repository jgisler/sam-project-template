#!/usr/bin/env node

const samPackage = require('commander');

samPackage
   .option('-p, --profile', 'profile')
   .option('-r, --region', 'region')
   .option('-v, --verbose', 'increased console verbosity')
   .parse(process.argv);

const environment = program.args;

if (!pkgs.length) {
  console.error('packages required');
  process.exit(1);
}

console.log();
if (program.force) console.log('  force: install');
pkgs.forEach(function(pkg){
  console.log('  install : %s', pkg);
});
console.log();