import React from 'react';
import BookInfo from './BookInfo';


const App = () => (
  <div className="container">
    <div className="row">
      <BookInfo
        url="https://www.googleapis.com/books/v1/volumes/dle2BgAAQBAJ"
      />
    </div>
  </div>
);

export default App;
