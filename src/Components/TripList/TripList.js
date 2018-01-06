import React, { Component } from 'react';

export class TripList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tripList: props.trips
        };
      }

      componentWillReceiveProps(props) {
        this.setState({
          trips: props.trips
        });
      }

  render() {
    const trips = this.state.tripsToDisplay.map ( t => {
        return(
            <div key={t.id}>
            <p>Origin: {t.origin}</p>
            <p>Destination: {t.destination}</p>
            <p>Distance: {t.distance}</p>

            </div>
        )
    })
    return (
      <div>
        <div className="tripContainer">
                    {trips}
                </div>
      </div>
    )
  }
}
