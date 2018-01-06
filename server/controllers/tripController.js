let trips = [];
let id = 0;
const TRIP_LIMIT = 10;

module.exports = {
    create: (request, response) => {
        const trip = request.body;
        if (trips.length >= TRIP_LIMIT){
            response.status(500);
        } else {
            trip.tripId = id;
            id++;

            trips.push(trip);
            response.status(200);
        }
    },

    read: (request, response) => {
        response.status(200).send(trips);
    },

    update: (request, response) => {
        const newDestination = request.body.destination;
        const tripId = request.params.tripId;
        trips = trips.map((trip) => {
            if(trip.tripId == tripId){
                trip.destination = newDestination;
                return trip;
            }
            return trip;
        });

        response.status(200).send();
    },

    delete: (request, response) =>{
        const tripId = req.params.tripId;
        trips = trips.filter(trip => !(trips.tripId == tripId));
        response.status(200).send(trips);
    }
}