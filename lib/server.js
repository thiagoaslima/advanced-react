import express from 'express';
import config from './config';
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { test: 123 });
});

app.listen(config.port, function listenPortHandler() {
    console.info(`Running on port ${config.port}`);
});