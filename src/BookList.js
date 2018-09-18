import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './styles.css';
import { getBookInfo } from './BookInfo/book';
import book from './book.json';
import book2 from './book-2.json';

const list = [
  getBookInfo(book),
  getBookInfo(book2),
];

const BookList = () => (
  <ul>
    {list.map(
      ({ id, title }) => (
        <li key={id}>
          <Link to={`/book/${id}`}>{title}</Link>
        </li>
      )
    )}
  </ul>
);

export default BookList;
