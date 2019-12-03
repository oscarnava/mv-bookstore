import React from 'react';
// import PropTypes from 'prop-types';

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
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Kids">Kids</option>
      <option value="Learning">Learning</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </datalist>
    <button type="submit">Add book</button>
  </>
);

export default BooksForm;

// BooksForm.propTypes = {
//   books: PropTypes.array.isRequired,
// };
