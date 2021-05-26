var mysql = require('mysql')
require('dotenv').config();
 var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port:3306,
    host:'tvcpw8tpu4jvgnnq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    user:'z03ymjairscgxjet',
    password:'y6aws1hygf7kafo3',
    database:'p298p57zjhjzof5d',
    }
  );
}

connection.connect();

module.exports = connection;


