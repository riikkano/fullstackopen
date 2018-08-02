import React from 'react'

const FilterForm = (props) => {
  const p = props.this
  return (
    <form onSubmit={p.addPerson}>
      <div>
        rajaa näytettäviä: <input value={p.state.filter} onChange={p.handleSearch}/>
      </div>
    </form>
  )
}

export default FilterForm
