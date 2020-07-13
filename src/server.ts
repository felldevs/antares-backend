import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => {
  return response.json({ shoutout: 'Damn it!' });
})

app.listen(3333)