import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Movie from './Pages/Movie/Movie';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
  );
}

export default App;
