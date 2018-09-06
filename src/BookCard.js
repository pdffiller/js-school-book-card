import React from 'react';

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

const BookCard = ({ thumbnail, title, authors, year }) => (
  <div className="col-md-4">
    <div className="card">
      <img
        className="card-img-top"
        src={thumbnail}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
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
);

export default BookCard;
