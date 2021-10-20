import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const API_ENDPOINT =
  'https://www.omdbapi.com/?i=tt3896198&apikey=8f722179';
const AppContext = React.createContext();
console.log(API_ENDPOINT);
const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
