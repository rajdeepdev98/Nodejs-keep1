const bodyParser = require('body-parser');
const cors = require('cors')
const api = require('./api/v1/index');
const db = require('./db/connection');

const connectToDatabase = () => {
  db.createMongoConnection();
}

const setAppMiddleware = (app) => {
  app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(cors());
}

const apiSetUp = (app) => {
  app.use('/api/v1', api);
}

module.exports = {
  connectToDatabase,
  setAppMiddleware,
  apiSetUp
}