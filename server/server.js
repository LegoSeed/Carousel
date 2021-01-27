const app = require('./app');

const PORT = 443;

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});
