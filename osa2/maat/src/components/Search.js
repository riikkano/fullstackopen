import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={console.log('Click')}>
    <div>find countries:<input value={props.filter} onChange={props.handleSearch}/></div>
    </form>
  )
}

export default Search
