import React from 'react';

import './App.css';
import NewJoke from './NewJoke';

class App extends React.Component {
  constructor() {
    super();
    this.state = {getDataState:'Press the button!'};
  }


  getData = async function () {
    const promise = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await promise.json();
    this.setState({
      getDataState:data['value']
    })
    console.log(data)
    
  }

  

  render() {
    
    return (
     
      <NewJoke btn="Generate New Joke" title="New Joke" content={this.state.getDataState} generate={()=>this.getData()}></NewJoke>
      
    );
  }
}

export default App;
