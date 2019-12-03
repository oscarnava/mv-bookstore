import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = () => ({});

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

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.any,
};
