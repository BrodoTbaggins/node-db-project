const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const app = express();
const baseURL = '/api/trips';
const port = process.env.PORT || 3001;
const key = "AIzaSyCOFj1kei4p6mQGaAk3M0LigZ1IO_u2Ot0";
const tc = require(__dirname + '/controllers/trip_controller.js');

app.use(bodyParser.json());

app.get(`${baseURL}/:origin/:destination`, (request, response) => {
    axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${request.params.origin}&destinations=${request.params.destination}&key=${key}`)
    .then(res => {
        response.send(res.data);
    })
})

app.post(baseURL, tc.create);
app.get(baseURL, tc.read);
app.put(`${baseURL}/:id`, tc.update);
app.delete(`${baseURL}/:id`, tc.delete);


app.listen(port, () => console.log(`The port is listening on port ${port}`));