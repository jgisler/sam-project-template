#!/usr/bin/env node

const samCmd = require('commander');
const packageJson = require('../package.json');

samCmd
   .version(packageJson.version)
   .command('package [environment]', 'create a deployment package')
   .command('deploy [environment]', 'deploy the stack')
   .command('delete [environment]', 'delete the stack')
   .parse(process.argv);

   