import React, { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    name: '',
    page: 1,
  };
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      alert(
        'You have to enter something first to search for images!'
      );
      return;
    }

    this.props.onSubmitHandler(this.state);

    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <title>search</title>
                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
              </svg>
            </span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
