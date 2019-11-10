// personality-factory/src/config.js

module.exports = {
  projectId:
    process.env.APP_ENV === 'PROD'
      ? process.env.PROD_PROJECT_ID
      : process.env.TEST_PROJECT_ID,
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET || 'security theatre secret',
};
