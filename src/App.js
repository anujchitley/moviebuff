import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import CardList from './components/CardList';
import axios from 'axios';


class App extends Component {
  
	constructor(){
		super()
		this.state = {					
			loadingState: true,
			movies: []
		};
	}

	componentDidMount(){
		this.performanceSearch();
	}

	performanceSearch = (query = 'star') => {
		let url = `http://www.omdbapi.com?apikey=[YOUR_API_KEY]&r=json&s=${query}`;
		axios.get(url).then((response) => {
			this.setState({ 
				movies: response.data.Search,
				loadingState: false
			})	
		}).catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

			
	render(){		
		return(	
		  <div> 	
		  	<div className='tc bg-black'>
		  		<Search onSearch = {this.performanceSearch} />
		  	</div>
		    <div className='tc bg-black'>
		    	{this.state.loadingState ? <p className='tc bg-white'>loading...</p> :
		    		<CardList movie = {this.state.movies}/>
		    	}		   
		  	</div>
		  </div>  
		);
	}


	
}

export default App;








