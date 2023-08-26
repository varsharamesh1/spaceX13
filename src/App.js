import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Model from "./Model";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: []
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then(rockets => this.setState({ rockets: rockets }))
  }

  render() {
    return (
      <div className="container">
        <h1> Spacex Rocket Encyclopedia </h1>
        <div className="row">
          {this.state.rockets.map(rocket => (
            // <h1 key ={rocket.id}> {rocket.name}</h1>
            <>
              <Card key={rocket.id} rocket={rocket} /> 
                    <Model rocket={rocket}/>
            </>

          ))}
        </div>
      </div>
    );
  }
}

export default App;

















