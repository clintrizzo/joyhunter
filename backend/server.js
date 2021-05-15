const session = require('express-session');
const path = require('path');
const cors = require('cors');
// const mysql= require('mysql');
const express = require('express');
const app = express();
// const compression = require('compression');
// app.use(compression());

const PORT = process.env.PORT || 3001;


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./backend/controllers'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Noreldin1234',
  database: 'joyhunter_db',
});


// app.post('/create', (req,res)=> {
//   const name = req.body.name;
//   const email = req.body.email;
//   const age = req.body.age;
//   const city = req.body.city;
//   const dob = req.body.dob;

//   db.query('INSERT INTO profiles (name, email, age, city, dob) VALUES ()')


// });

app.use(cors());

// app.get('/tasks',(req,res)=> {
//   res.send('list of all task')
// })

// app.get('/addTask',(req,res)=> {
//   res.send('you can add tasks')
// })

// app.get('/deleteTask', (req,res)=> {
//   res.send('deleteTask')
// })

// app.listen(4000, ()=> {
//   console.log('running on port 4000')
// })
