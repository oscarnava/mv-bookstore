import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button
        type="button"
        onClick={handleRemoveBook}
      >
        Remove
      </button>
    </td>
  </tr>
);

export default Book;
Book.propTypes = {
  book: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
