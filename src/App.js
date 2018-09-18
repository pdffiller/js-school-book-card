import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import BookList from './BookList';


const App = () => (
  <Router>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <BookList />
        </div>
        <div className="col-md-9">
          <div className="row">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
