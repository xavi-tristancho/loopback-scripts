#!/usr/bin/env node

"use strict";

const args = process.argv.slice(2);
const script = args[0];

const Database = require("../scripts/database");
const database = Database();

switch (script) {
  case "autoupdate":
    database
      .autoupdate()
      .then(() => process.exit(0))
      .catch(err => process.exit(1));
    break;
  default:
    console.log('Unknown script "' + script + '".');
    process.exit(1);
    break;
}
