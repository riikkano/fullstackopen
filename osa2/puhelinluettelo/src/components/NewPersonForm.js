import React from 'react'

const NewPersonForm = (props) => {
  const p = props.this
  return(
    <form onSubmit={p.addPerson}>
      <div>
        nimi: <input value={p.state.newName} onChange={p.handleNameChange}/>
      </div>
      <div>
        numero: <input value={p.state.newNumber} onChange={p.handleNumberChange}/>
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default NewPersonForm
