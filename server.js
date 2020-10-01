const converter = require('./mymodule');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/flex', (req, res, next) => {
    res.sendFile(`${__dirname}/public/flex.html`);
});

app.post('/form', (req, res, next) => {
    fetch(`https://www.metaweather.com/api/location/search/?query=${req.body.city}`)
    .then(resp => resp.text())
    .then(txt => res.end(txt));
});

app.get('/weather/:woeid', (req, res, next) => {
    fetch(`https://www.metaweather.com/api/location/${req.params.woeid}/`)
    .then(response => response.json())
    .then(json => {
        const resp = [];
        json.consolidated_weather.forEach(element => {
            resp.push({
                temp: element.the_temp,
                pic: `https://www.metaweather.com/static/img/weather/png/64/${element.weather_state_abbr}.png`
            })
        });
        res.end(JSON.stringify(resp, null, 2));
    });
});


app.listen(PORT);