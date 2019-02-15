import React from 'react'
import './Homepage.css';

class Homepage extends React.Component{

    getCharacterName = (event) => {
        event.preventDefault();
        console.log('SWV');
    }
    render(){
        return (
            <div className="search-area">
               <form className="new-swapi-search" onSubmit={this.getCharacterName}>
                  <label htmlFor='swapi-search-term'>Who are Your Looking For?</label>
                  <input type="text" id="swapi-search-term" />
                  <button type="submit">Search</button>
               </form>
            </div>
        )
    }
}

export default Homepage;