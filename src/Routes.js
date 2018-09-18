import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import BookInfo from './BookInfo';

// const BookInfoByRoute = ({ match }) => <BookInfo id={match.params.bookId} />;

const logger = msg => Component => props => {
  console.log(msg, props);
  return <Component {...props} />
};

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/book" />} />
    <Route exact path="/book" render={() => <h3>Please select a book.</h3>} />
    <Route path="/book/:bookId" component={logger('/book/:id')(
      ({ match }) => <BookInfo id={match.params.bookId} />
    )} />
    <Route render={props => {
      console.log(props);
      return '404 Not Found';
    }} />
  </Switch>
);

export default Routes;