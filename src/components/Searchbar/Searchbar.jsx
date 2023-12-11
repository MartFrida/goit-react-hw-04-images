import React from 'react';
import clsx from 'clsx';
import s from './Searchbar.module.css'
import { FaSearchengin } from "react-icons/fa6";

export class Searchbar extends React.Component {
  state = {
    query: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleSetSearchQuery(this.state.query)
  }

  handleChangeQuery = e => {
    this.setState({ query: e.target.value })
  }
  render() {
    return (
      <header className={clsx(s.searchbar)}>
        <form className={s.form} onSubmit={this.handleSubmit}>

          <button className={s.button}>
            <FaSearchengin size={25} />
          </button>

          <input
            value={this.state.query}
            onChange={this.handleChangeQuery}
            className={s.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }

}
