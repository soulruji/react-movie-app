import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, rank, title, openDate, audiCount}) {
	return (
		<Link to={{
			pathname: '/movie/${id}',
			state: {
				rank,
				title,
				openDate
			}
		}} >
			<div className="movie">
				<span className="movie_id">{id}</span>
				<span className="movie_rank">{rank}</span>
				<div className="movie_data">
					<h1 className="movie__title">{title}</h1>
					<span className="movie__opendate">{openDate}</span> | <span className="movie_audicount">{audiCount}명</span>
				</div>
			</div>
		</Link>
	);
}

Movie.propTypes = {
	id: PropTypes.string.isRequired,
	rank: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	openDate: PropTypes.string.isRequired,
	audiCount: PropTypes.string.isRequired
}

export default Movie;