import React from 'react';

const Card = ({Poster, Title, Year}) => {
	return(
		<div className='db center mw5 black link tc dib pa2 ma3 grow bw2 shadow-5'> 
			<div id='posterImage'>
				<img alt='movie' className='db ba b--black-10 ' src={Poster} />
			</div>
			<div>
				<dl className="mt2 f6 lh-copy">
				    <dt className="clip">Title</dt>
				    <dd id='title' className="ml0 fw9 white">{Title}</dd>
				    <dt className="clip">Year</dt>
				    <dd className="ml0 gray">{Year}</dd>
			  	</dl>
			</div>
		</div>
	);
};

export default Card;