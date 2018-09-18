import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import BookInfo from './BookInfo';


const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/book" />}
    />
    <Route
      exact
      path="/book"
      render={() => <h3>Please select a book.</h3>}
    />
    <Route
      path="/book/:bookId"
      component={
        ({ match }) => (
          <BookInfo id={match.params.bookId} />
        )
      }
    />
  </Switch>
);

export default Routes;