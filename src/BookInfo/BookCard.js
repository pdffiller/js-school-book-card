import React from 'react';
import BookInfoProvider from './BookInfoProvider';

const BookAuthor = ({ author }) => (
  <p className="card-text">
    {author}
  </p>
);

const BookAgeBadge = ({ isNew }) => (
  <div className={`badge badge-${isNew ? 'success' : 'secondary'}`}>
    {isNew ? 'new' : 'old'}
  </div>
)

const BookCard = ({ toggleView }) => (
  <BookInfoProvider.Consumer>
    {({ book }) => {
      if (book == null) return null;
      const { thumbnail, title, authors, year } = book;
      return (
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={thumbnail}
              alt={title}
            />
            <div className="card-body">
              <h4 className="card-title">
                <button onClick={toggleView} className="btn btn-link">
                  {title}
                </button>
              </h4>
                {authors ? authors.map(
                  author => <BookAuthor key={author} author={author} />
                ) : 'no authors'}
              <div className="card-text">
                {year}
                {' '}
                <BookAgeBadge isNew={year > 2010} />
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </BookInfoProvider.Consumer>
);

export default BookCard;
