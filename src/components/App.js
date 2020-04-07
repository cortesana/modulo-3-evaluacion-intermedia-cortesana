import React from 'react';
import '../stylesheets/App.scss';
import PokeAPI from '../data/pokeapi.json';
import PokeList from './PokeList';

  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: PokeAPI
    };
  }
  render () {
    return(
      <div className="App">
        <h1>PokeList</h1>
        <PokeList pokeListData={this.state.pokeData} />
      </div>
  );
  }
}

export default App;
