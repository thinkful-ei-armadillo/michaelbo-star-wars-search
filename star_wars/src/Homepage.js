import React from 'react'
import './Homepage.css';

class Homepage extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state({
    //         name: null
    //     })
    // }

    getCharacterName = (searchName) => {
        // const url = 'https://swapi.co/api/'

        // console.log(url);
        console.log(searchName);
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
            //   
            // const empire = jedi.map(char => {
            //     return jedi.name = char.name
            
            console.log(jedi);
        })
        
        .catch(error =>{
            console.log(error); 
        })

    }
    render(){
        return (
            <div className="search-area">
               <form className="new-swapi-search" onSubmit={ (event) => 
                                                                       {event.preventDefault(); 
                                                                       this.getCharacterName(event.currentTarget.swapiSearchTerm.value)}}>
                  <label htmlFor='swapi-search-term'>Who are Your Looking For?</label>
                  <input name="swapiSearchTerm" type="text" id="swapi-search-term" />
                  <button type="submit">Search</button>
               </form>
            </div>
        )
    }
}

export default Homepage;