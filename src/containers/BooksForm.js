import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import categories from '../utils/categories';

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = ({ target: { name, value } }) => (name === 'title' ? setTitle(value) : setCategory(value));
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
          onChange={handleChange}
        />
      </label>
      <label htmlFor="category">
        Category
        <input
          type="text"
          name="category"
          list="category-list"
          value={category}
          onChange={handleChange}
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

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
