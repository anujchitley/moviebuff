import React from 'react';
import Card from './Card.js';

const CardList = ({ movie }) => {
		
		const cardComponent = movie.map((film, i) => {
			return <Card 
				key={i}
				Poster={movie[i].Poster} 
				Title={movie[i].Title} 
				Year={movie[i].Year}/>		
			})

		return(
			<div>
				{cardComponent}
			</div>

		);
};


export default CardList;