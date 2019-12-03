import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books && books.map((book) => <Book key={book.id} book={book} />)}
    </tbody>
  </table>
);

export default BooksList;

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.any,
};
