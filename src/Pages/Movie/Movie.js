import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from '../../API/api.endpoint';

const Movie = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: '' });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const movie = await response.json();
    if (movie.Response === 'False') {
      setError({ show: true, message: movie.Error });
      setisLoading(false);
    } else {
      setMovie(movie);
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id} `);
  }, [id]);
  if (isLoading) {
    return <div className='loading'></div>;
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.message}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Plot: plot, Year: year, Title: title } = movie;
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default Movie;
