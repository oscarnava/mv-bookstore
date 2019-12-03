import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books && books.map((book) => <Book key={book.id} book={book} />)}
  </table>
);

export default BooksList;

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};
