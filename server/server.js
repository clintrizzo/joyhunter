
const express = require('express');
const connection = require('./config/connection');
const path = require('path');
//const cors = require('cors');

const routes = require('./routes');

//const app = cors();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('../client/build'));
  // Express serve up index.html file if it doesn't recognize route
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

connection.sync().then(function(){
  app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
  });
});
