import React from 'react';

const CountryInfo = (props) => {
  const country = props.country[0]
  return (
    <div>
    <h1>{country.name}</h1>
    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>
    <br/>
    <img src={country.flag} alt="Flag of the country" width="70%" max-width="50px"/>
    </div>
  )
}

export default CountryInfo
