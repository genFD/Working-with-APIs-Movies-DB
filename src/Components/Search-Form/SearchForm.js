import React from 'react';
import './search-Form.styles.css';
import { useGlobalContext } from '../../Context/context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault}>
      <h2>Search Movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.message}</div>}
    </form>
  );
};

export default SearchForm;
