let trips = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {origin, destination, distance, duration} = req.body;
        trips.push({id, origin, destination, distance, duration});
        id++;
        res.status(200).send(trips);
    },

    read: (req, res) => {
        res.status(200).send(trips)
    },

    update: (req, res) => {
        const updateID = req.params.id;
        let index = trips.findIndex( trip => trip.id == updateID)

        trips[index] = {
            id: trips[index].id,
            origin: req.body.origin || trips[index].origin,
            destination: req.body.destination || trips[index].destination
        };

        res.status(200).send(trips);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        tripID = trips.findIndex(trip => trip.id == deleteID);
        trips.splice(tripID, 1);
        res.status(200).send(trips);
    }
};