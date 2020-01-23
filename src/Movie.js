import React from 'react';
import './Movie.css';

function Movie() {
	return (
		<div>
			<MoviePoster />
			<h3>Test</h3>
		</div>
	);
}

function MoviePoster() {
	return (
		<div><img src="http://img.movist.com/?img=/x00/05/19/15_p1.jpg"></div>
	);
}

export default Movie;