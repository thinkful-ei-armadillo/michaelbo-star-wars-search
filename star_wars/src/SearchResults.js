import React from 'react';

class SearchResults extends React.Component {
    render(){
        console.log('in the results', this.props.list);
        return(
            <ul className="swapi-test-list">
               {this.props.list.map(name => {
                   return(
                       <li key={name}>{name}</li>
                   )
               })}
            </ul>
        )
    }
}

export default SearchResults;