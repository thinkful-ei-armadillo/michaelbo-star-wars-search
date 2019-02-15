import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage'
import SearchResults from './SearchResults';

class App extends Component {

  // constructor(props){
  //   super(props)
    
  //   })
  // }

state = {
  searchName: '',
  list: []
}

displayResults = (data) => {
    console.log(data);
    const results = data.results.map(character => {
      return {
        name: character.name
      }
    })
    console.log(results.name);
}

// getCharacterName = (searchName) => {
//   const url = 'https://swapi.co/api/'

//   console.log(url);
//   console.log(searchName);
//   fetch (`https://swapi.co/api/people/?search=${searchName}`)
//   .then(res => {
//       if (!res.ok){
//           return res.json()
//           .then(error => {throw error});
//       }
//       return res.json(); })
//   .then (data =>{ 
//       this.props.displayResults(data)
//   })
  
//   .catch(error =>{
//       console.log(error); 
//   })

// }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome To The Star Wars App</h1>
        </header>
        <Route 
            path={'/'}
            value={this.state.searchName}
            component={Homepage}/>
         <div className="swapi-search-results">
            <SearchResults list={this.state.list}/>
             

        </div>
      </div>
      </>
    );
  }
}

export default App;
