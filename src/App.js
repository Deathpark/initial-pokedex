import React, { Component } from 'react'; 
import './App.css';

import {CardList} from './components/card-list/card-list.component';


class App extends Component{  
  constructor() {
    super();

    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch('data/pokemons.json')
    .then(response => response.json())
    .then(pokedex => this.setState({pokemons: pokedex}))
  }

  render() {
    return (
      <div className="App">
        <CardList pokemons={this.state.pokemons}/>
      </div>
    )
  };
}


export default App;
