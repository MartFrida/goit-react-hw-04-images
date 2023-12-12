import React, { useState } from 'react';
import clsx from 'clsx';
import s from './Searchbar.module.css'
import { FaSearchengin } from "react-icons/fa6";

export const Searchbar = ({ handleSetSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSetSearchQuery(query)
  }
  const handleChangeQuery = e => {
    setQuery(e.target.value)
  }
  return (
    <header className={clsx(s.searchbar)}>
      <form className={s.form} onSubmit={handleSubmit}>

        <button className={s.button}>
          <FaSearchengin size={25} />
        </button>

        <input
          value={query}
          onChange={handleChangeQuery}
          className={s.input}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

