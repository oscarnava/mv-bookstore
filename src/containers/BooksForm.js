import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

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
  const [category, setCategory] = useState('');
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = () => {
    createBook({ id: new Date().getTime(), title, category });
    setTitle('');
    setCategory('');
    if (!categories.includes(category)) {
      categories.push(category);
    }
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
        <input list="category-list" value={category} onChange={handleChange} />
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

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
