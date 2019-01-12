import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import CardList from './components/CardList';
import { movieArray } from './components/movie.js';

class App extends Component {
  
  render(){
       return(
          <div className='tc bg-black'>
            <Search />
            <CardList movie = { movieArray }/>
          </div> 
        );
  }
}

export default App;








