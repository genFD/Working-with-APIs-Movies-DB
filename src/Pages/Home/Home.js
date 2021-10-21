import React from 'react';
import SearchForm from '../../Components/Search-Form/SearchForm';
import Movies from '../../Components/Movies/Movies';
const Home = () => {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
