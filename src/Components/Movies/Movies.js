import React from 'react';
import './movie.styles.css';
import { useGlobalContext } from '../../Context/context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className='loading'></div>;
  }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt='Loading...' />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
