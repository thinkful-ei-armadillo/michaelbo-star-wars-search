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

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome To The Star Wars App</h1>
        </header>
        <Route 
            path={'/'}
            component={Homepage}/>
         <div className="swapi-search-results">
            <Route 
               path={'/search-results'}
               component={SearchResults}/>
             

        </div>
      </div>
      </>
    );
  }
}

export default App;
