const express = require('express');
const app = express();
const appService =  require('./appservice');

//write your logic here

appService.connectToDatabase();
appService.setAppMiddleware(app);
appService.apiSetUp(app);
app.listen(3000);
module.exports = app;