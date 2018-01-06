import React, { Component } from 'react';
import './App.css';
import GetTrip from './Components/GetTrip/GetTrip';
import TripList from './Components/TripList/TripList';


class App extends Component {

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fabulous Trip Planner</h1>
        </header>
        <GetTrip />
        <TripList />
        
      </div>
    );
  }
}

export default App;
