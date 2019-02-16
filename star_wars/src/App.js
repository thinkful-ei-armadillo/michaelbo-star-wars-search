import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage'
import SearchResults from './SearchResults';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      list: []
    }
  }

  getCharacterName = (searchName) => {
       
    fetch (`https://swapi.co/api/people/?search=${searchName}`)
    .then(res => {
        if (!res.ok){
            return res.json()
            .then(error => {throw error});
        }
        return res.json(); })
    .then (data =>{ 
        const jedi = data.results.map(person => {
            console.log('person', person);
            return  person.name
        }) 
       
        
       this.setState({
         list: jedi
       })
    })
    
    .catch(error =>{
        console.log(error); 
    })

}

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome To The Star Wars App</h1>
        </header>
        <div className="search-area">
               <form className="new-swapi-search" onSubmit={ (event) => 
                                                                       {event.preventDefault(); 
                                                                       this.getCharacterName(event.currentTarget.swapiSearchTerm.value)}}>
                  <label htmlFor='swapi-search-term'>Who are Your Looking For?</label>
                  <input name="swapiSearchTerm" type="text" id="swapi-search-term" />
                  <button type="submit">Search</button>
               </form>
            </div>
         <div className="swapi-search-results">

            <SearchResults list={this.state.list}/>
             

        </div>
      </div>
      </>
    );
  }
}

export default App;
