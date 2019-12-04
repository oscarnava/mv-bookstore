import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const mapStateToProps = ({ books, filter }) => ({ books, filter });
const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const BooksList = ({
  books = [], filter, removeBook, changeFilter,
}) => (
  <>
    <CategoryFilter filter={filter} changeFilter={changeFilter} />
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
          && books
            .filter((b) => b.category === filter || filter === 'All')
            .map((book) => (
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
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
