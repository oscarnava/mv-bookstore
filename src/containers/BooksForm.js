import React from 'react';
// import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <>
    <label htmlFor="title">
      Title
      <input type="text" name="title" id="title" />
    </label>
    <label htmlFor="category">
      Category
      <input list="category-list" />
    </label>
    <datalist id="category-list">
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </datalist>
    <button type="submit">Add book</button>
  </>
);

export default BooksForm;

// BooksForm.propTypes = {
//   books: PropTypes.array.isRequired,
// };
