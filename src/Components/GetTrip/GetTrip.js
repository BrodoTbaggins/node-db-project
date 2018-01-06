import React, {Component} from 'react';
import axios from 'axios';

export default class getTrip extends Component{
    constructor(){
        super();
        this.state = {
            origin: '',
            destination: '',
            data: null
        }
    this.getTripData = this.getTripData.bind(this);    
    this.handleUpdateOrigin = this.handleUpdateOrigin.bind(this);
    this.handleUpdateDestination = this.handleUpdateDestination.bind(this);
    }

    getTripData(){
        axios.get(`/api/trips/${this.state.origin}/${this.state.destination}`)
        .then(response => this.setState({data: response.data}))  
    }


    handleUpdateOrigin(e){
        this.setState({origin: e.target.value})
    }
    
    handleUpdateDestination(e){
        this.setState({destination: e.target.value})
    }

    render(){
        return(
             <div>
                 <div className="form">
                    <input type="text" placeholder="Origin" onChange={this.handleUpdateOrigin}/>
                    <input type="text" placeholder="Destination" onChange={this.handleUpdateDestination}/>
                    <button onClick={this.getTripData}>Get Distance</button>
                </div>

                <div>
                   {this.state.data &&
                    <div>
                        <h1>Origin: {this.state.data.origin_addresses}</h1>
                        <h1>Destination: {this.state.data.destination_addresses}</h1>
                        <h3>Distance: {this.state.data.rows[0].elements[0].distance.text}</h3>
                        <h3>Duration: {this.state.data.rows[0].elements[0].duration.text}</h3>
                        </div>
                    }
                    
                </div>

            </div>
        )
    }
}
