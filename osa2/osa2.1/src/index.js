import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

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

const Kurssit = (props) => {
  return (
  <div>
  {/*props*/}
  {console.log("kurssit:", props.kurssit)}
  <h1>Opetusohjelma</h1>
    <ul>
      {props.kurssit.map(kurssi =>
          <li key={kurssi.id}>
            <Kurssi kurssi={kurssi}/>
          </li>)}
    </ul>
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

const Osa = (props) => {
  return(
    <div>
    <p>{props.osa} {props.tehtavia}</p>
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

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Kurssit kurssit={kurssit} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
