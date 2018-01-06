const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const app = express();
const baseURL = '/api/trips';
const port = process.env.PORT || 3001;
const key = "AIzaSyCOFj1kei4p6mQGaAk3M0LigZ1IO_u2Ot0";

const tripController = require('./controllers/tripController');

app.use(bodyParser.json());

app.get(`${baseURL}/:origin/:destination`, (request, response) => {
    axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${request.params.origin}&destinations=${request.params.destination}&key=${key}`)
    .then(res => {
        response.send(res.data);
    })
})

app.get(baseURL, function (req, res) {
    res.send('hello world')
  })

  app.get(baseURL, tripController.read);
  app.post(baseURL, tripController.create);
  app.put(baseURL, tripController.update);
  app.delete(baseURL, tripController.delete);

app.listen(port, () => console.log(`The port is listening on port ${port}`));