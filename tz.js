/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const yargs = require('yargs');

let targetTimezone;

if (process.argv.length !== [3]) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit[1];
} else {
  targetTimezone = yargs.argv._[0];
}

console.log(
  `The time at the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
