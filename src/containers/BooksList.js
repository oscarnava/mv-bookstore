import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions';
import Book from '../components/Book';

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

const BooksList = ({ books = [], removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books
        && books.map((book) => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={() => {
              removeBook(book.id);
            }}
          />
        ))}
    </tbody>
  </table>
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};
