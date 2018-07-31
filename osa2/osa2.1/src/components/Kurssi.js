import React from 'react'

const Kurssi = (props) => {
  console.log(props.kurssi.nimi)
    return(
      <div>
        <Otsikko kurssi={props.kurssi.nimi} />
        <Sisalto kurssi={props.kurssi} />
        <Yhteensa kurssi={props.kurssi} />
      </div>
    )
}

const Otsikko = (props) => {
    return (
    <div>
    <h2>{props.kurssi}</h2>
    </div>
  )
}

const Sisalto = (props) => {
    return (
    <div>
    <ul>
      {props.kurssi.osat.map(osa =>
          <li key={osa.id}>
            <Osa osa={osa.nimi} tehtavia={osa.tehtavia} />
          </li>)}
    </ul>
    </div>

  )
}

const Osa = (props) => {
  return(
    <div>
    <p>{props.osa} {props.tehtavia}</p>
    </div>
  )
}

const Yhteensa = (props) => {
  let initialValue = 0;
  let sum = props.kurssi.osat.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.tehtavia;
    },initialValue)
  console.log("Kurssin osat:", props.kurssi.osat)
  console.log("Tehtävien summa:", sum) // logs 6
  return(
    <div>
    <p>Yhteensä {sum} tehtävää</p>
    </div>
  )
}

export default Kurssi
