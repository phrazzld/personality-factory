// personality-factory/server.js

require('module-alias/register');
const app = require('@root/app');
const config = require('@root/config');

app.listen(config.port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `Personality Factory operational, listening on port ${config.port}`,
    );
  }
});
