import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Kurssi from './components/Kurssi.js'



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
