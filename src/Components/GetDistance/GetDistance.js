import React, {Component} from 'react';
import axios from 'axios';

export default class GetDistance extends Component{
    constructor(){
        super();
        this.state = {
            tripsToDisplay: [],
            origin: '',
            destination: '',
            data: null
        }
    this.getDistance = this.getDistance.bind(this);    
    this.handleUpdateOrigin = this.handleUpdateOrigin.bind(this);
    this.handleUpdateDestination = this.handleUpdateDestination.bind(this);
    }

    getDistance(){
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
                    <button onClick={this.getDistance}>Get Distance</button>
                </div>
            </div>
        )
    }
}
