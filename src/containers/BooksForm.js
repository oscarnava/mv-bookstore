import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
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

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState();
  const handleSubmit = () => {
    createBook({ id: new Date().getTime(), title, category });
    setTitle('');
    setCategory('');
  };
  return (
    <>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="category">
        Category
        <input
          list="category-list"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <datalist id="category-list">
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </datalist>
      <button type="submit" onClick={handleSubmit}>
        Add book
      </button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);

// BooksForm.propTypes = {
//   books: PropTypes.array.isRequired,
// };
