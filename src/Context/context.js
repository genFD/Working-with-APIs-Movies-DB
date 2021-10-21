import React, { useState, useContext, useEffect } from 'react';
import { API_ENDPOINT } from '../API/api.endpoint';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('superman');

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const movies = await response.json();
      if (movies.Response === 'True') {
        setMovies(movies.Search);
        setError({
          show: false,
          message: '',
        });
      } else {
        setError({ show: true, message: movies.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
