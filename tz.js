/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const form = 'dddd, MMMM Do YYYY, h: mm:ss a';

const yargs = require('yargs');

let targetTimezone;

if (yargs.argv.length !== [3]) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit[1];
} else {
  targetTimezone = yargs.argv._[0];
}

if (yargs.argv.format === true) {
  console.log(
    `The time at ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format('dddd, MMMM Do YYYY, h:mm:ss a')}`
  );
  console.log(
    `The time right now is at America/New_York timezone is ${moment().format(
      form
    )}`
  );
} else {
  console.log(
    `The time at ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format()}`
  );
  console.log(`The time at America/New_York timezone is ${moment().format()}`);
}
