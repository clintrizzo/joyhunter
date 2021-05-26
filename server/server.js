
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
//const cors = require('cors');

const routes = require('./routes');

//const app = cors();
const app = express();
const PORT = process.env.PORT || 3001;

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

const connection = mysql.createConnection({
  host: 'htvcpw8tpu4jvgnnq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'z03ymjairscgxjet',
  port: '3306',
  password: 'y6aws1hygf7kafo3',
  database: 'p298p57zjhjzof5d',
  insecureAuth: true
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
