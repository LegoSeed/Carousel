const { Pool, Client } = require('pg');
const connectionLocation = "postgres://localhost:5432/sdc"

const db = new Client({
  connectionString: connectionLocation,
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
