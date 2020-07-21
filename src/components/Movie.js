import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'

const Movie = ({ title, year, summary, poster, genres }) => {
    return (
        <div class = "movie">
          <Link
            to = {{
              pathname : '/movie-detail',
              state : { year, title, summary, poster, genres},
            }}
          >
              <img src={poster} alt={title} title = {title} />
                <div class = "movie__data">
                  <h3 class = "movie__title">{title}</h3>
                  <h5 class = "movie__year">{year}</h5>
                  <ul class = "movie__genres">
                   {genres.map((genre, index) => {
                     return <li class = "movie__genre" key = {index}>
                              {genre}
                            </li>
                   })}
                  </ul>
                  <p class = "movie__summary">{summary.slice(0, 180)}...</p>
                </div>
          </Link>
        </div>
    )
}

Movie.propTypes = { 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
}

export default Movie;