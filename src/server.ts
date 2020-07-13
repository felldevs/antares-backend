import express from 'express';
import '@controllers/UserController';

const app = express();

app.get('/', (request, response) => {
    return response.json({ shoutout: 'Its grind season, homie!'});
});

app.listen(3333);