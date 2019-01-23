import React, { Component } from 'react';
// import './Nav.css';


class SearchForm extends Component {
	
	state = {
		searchText: ''
	};

	onSearchChange = (e) => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};


	render(){

		return(
		<div className='pa2 bg-light-o'>
			<form onSubmit={this.handleSubmit}>	
				<input className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search movie'
				ref={input => (this.query = input)}
				onChange={this.onSearchChange}
				name='search' 
				/>
			</form>					
		</div>
	);
};

}

export default SearchForm;