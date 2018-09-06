import React from 'react';
import BookCard from './BookCard';

const getBookInfo = ({ id, volumeInfo }) => ({
  id,
  title: volumeInfo.title,
  authors: volumeInfo.authors,
  thumbnail: volumeInfo.imageLinks.thumbnail,
  year: +volumeInfo.publishedDate.slice(0, 4),
});

const booksJson = [
  require('./book.json'),
  require('./book-2.json'),
];

const books = booksJson.map(getBookInfo);

const Container = ({ children }) => (
  <div className="container">
    { children }
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="row">
        {books.map(
          book => (
            <BookCard
              key={book.id}
              thumbnail={book.thumbnail}
              title={book.title}
              authors={book.authors}
              year={book.year}
            />
          )
        )}
        </div>
      </Container>
    );
  }
}

export default App;
