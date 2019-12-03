import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksForm = ({ books }) => (
  <form>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" id="title" />
    <label htmlFor="category">Category</label>
    <input list="category-list" />
    <datalist id="category-list">
      <option value="Action" />
      <option value="Biography" />
      <option value="History" />
      <option value="Horror" />
      <option value="Kids" />
      <option value="Learning" />
      <option value="Sci-Fi" />
    </datalist>
  </form>
);

export default BooksForm;

// BooksForm.propTypes = {
// books: PropTypes.array.isRequired,
// };
