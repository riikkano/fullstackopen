import React from 'react'

const Person = (props) => {
  const p = props.person
  return (
    <li>{p.name} {p.number}</li>
  )
}

export default Person
