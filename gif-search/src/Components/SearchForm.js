import React, { useState } from 'react';

const SearchForm = props => {
  const [searchTextInput, setSearchTextInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.changeQuery(searchTextInput)
    e.currentTarget.reset()
  }

  return (
    <form className="search-form" onSubmit={e => handleSubmit(e)} >
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search" 
             onChange={e => setSearchTextInput(e.target.value)}
             name="search" 
             placeholder="Search..." />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>      
  );
}

export default SearchForm;