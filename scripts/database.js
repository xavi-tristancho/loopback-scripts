const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const app = require(`${appDirectory}/server/server`);
const modelConfig = require(`${appDirectory}/server/model-config.json`);

const Database = () => {
  const models = Object.keys(modelConfig).filter(key => {
    return key != "_meta" && modelConfig[key].dataSource === "db";
  });

  const ds = app.dataSources["db"];

  return {
    autoupdate() {
      return new Promise((resolve, reject) => {
        console.log("Updating the database");
        ds.autoupdate(models, err => {
          if (err) reject(err);
          console.log("Models " + models + " updated");
          resolve();
        });
      });
    }
  };
};

module.exports = Database;
