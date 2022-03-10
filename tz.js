const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const form = 'dddd, MMMM Do YYYY, h: mm:ss a';

const yargs = require('yargs');

const targetTimezone = yargs.argv._[0];

if (yargs.argv.all === true) {
  console.table(moment.tz.names());
} else if (yargs.argv.country) {
  console.table(moment.tz.zonesForCountry(yargs.argv.country));
}

if (targetTimezone) {
  console.log('Usage: node <script-file><timezone>');
  process.exit(1);
}

if (yargs.argv.format === true) {
  console.log(
    `The time at ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format('dddd, MMMM Do YYYY, h:mm:ss a')}`
  );
  console.log(`The time right now is ${moment().format(form)}`);
} else {
  console.log(
    `The time at ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format()}`
  );
  console.log(`The time right now is ${moment().format()}`);
}
