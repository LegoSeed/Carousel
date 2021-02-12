const { Pool, Client } = require('pg');
const connectionLocation = "postgres://13.57.223.34:5432/sdc"

const db = new Pool({
  user: 'postgres',
  host: '13.57.223.34',
  database: 'sdc',
  password: '',
  port: 5432,
});

db.connect()
  .then(() => {
    db.query(
      `create table if not exists products (
            name varchar(100),
            image varchar(100),
            reviewScore int,
            price real
        )`,
    );
  })
  .then(() => {
    console.log('Connected to PostGres');
  })
  .catch((error) => {
    console.log(error.message, 'Error');
  });
module.exports = db;
