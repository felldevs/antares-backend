import express from 'express';
 
const app = express();

app.get('/', (request, response) => {
    return response.json({ shoutout: 'Its grind season, homie!'});
});

app.listen(3333);