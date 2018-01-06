import React, {Component} from 'react';
import axios from 'axios';

export default class TripList extends Component{
  constructor(){
    super();
    this.state = {
      trips: []
    }
  }

  componentDidMount(){
    axios.get('/api/trips')
    .then(response => {
      this.setState({trips: response.data})
    })
  }

  render(){
    const {trips} = this.state;
    return(
      <div>
        <p>Trips: </p>
        {
          trips.map((trip, index) => (
            <div>
              <span>Origin: {trips[trip.id].origin} | Destination: {trips[trip.id].destination} | Distance: {trips[trip.id].distance} | Duration {trips[trip.id].duration}</span>
              </div>
          ))
        }
        </div>
    )
  }
}


