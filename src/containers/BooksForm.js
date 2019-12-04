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
      categories.sort();
    }
  };
  return (
    <>
      <h2 className="book-form-header">Add new book</h2>
      <div id="book-form">
        <input
          id="title-input"
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <input
          id="category-input"
          type="text"
          name="category"
          list="category-list"
          value={category}
          placeholder="Category"
          onChange={handleChange}
        />
        <datalist id="category-list">
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </datalist>
        <button id="submit-btn" type="submit" onClick={handleSubmit}>
        Add book
        </button>
      </div>
      <div id="category-hint">
        Tip: If the category doesn&apos;t exist in the list, just type it in the editor; it will be added to the categories list.
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
