import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td className="book-info">
      <div className="id">{book.id}</div>
      <div className="title">{book.title}</div>
      <div className="category">{book.category}</div>
      <div className="remove">
        <button type="button" onClick={handleRemoveBook}>
          Remove
        </button>
      </div>
    </td>
  </tr>
);

export default Book;
Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
