import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/" component={(props) => <MovieList {...props} addToSavedList={addToSavedList} />} />
        <Route path='/movies/:id' component={(props) => <Movie {...props} addToSavedList={addToSavedList} />}  />
      </Switch>
    </div>
  );
};

export default App;
