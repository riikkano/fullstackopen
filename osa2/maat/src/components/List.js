import React from 'react';
import Country  from './Country.js';
import CountryInfo from './CountryInfo.js'

const List = (props) => {
  if (props.length===1) {
    return (
      <CountryInfo country={props.countriesToShow}/>
    )
  }
  else if (props.length<10){
    return (
      <ul>
       {props.countriesToShow.map(country => <Country key={country.name} country={country}/>)}
     </ul>
    )
  } else {
    console.log(props.length)
  return (
    <p>too many matches, specify another filter</p>
    )
  }
}

export default List
