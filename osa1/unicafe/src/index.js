import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
    return (
    <button onClick={props.instance}>
    {props.name}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const x = props.list.state
  return (
    <table>
      <tbody>
        <Statistic name="hyvä" value={x.hyva}/>
        <Statistic name="neutraali" value={x.neutraali}/>
        <Statistic name="huono" value={x.huono}/>
        <Statistic name="keskiarvo" value={props.keskiarvo}/>
        <Statistic name="positiivisia" value={props.positiivisia}/>
      </tbody>
    </table>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      kaikki: [],
    }
  }

  asetaArvoon(o, arvo) {
    return () => {
      this.setState({ [o] : this.state[o] +1,
      kaikki: this.state.kaikki.concat(arvo)})
  }
  }

  render() {
    const historia = () => this.state.kaikki.join(' ')
    let ka = 0
    let len = this.state.kaikki.length
    if (len===0){
      return (
        <div>
        <h2>Anna palaute</h2>
        <Button name="hyvä" instance={this.asetaArvoon('hyva', 1)}/>
        <Button name="neutraali" instance={this.asetaArvoon('neutraali', 0)}/>
        <Button name="huono" instance={this.asetaArvoon('huono', -1)}/>
        <h2>Statistiikka</h2>
        <p>ei yhtään palautetta annettu</p>
        </div>
      )
    }

    const keskiarvo = () => {
      let sum = 0
      this.state.kaikki.forEach((luku) =>{
        sum+=luku
      })
        ka = sum/len
        console.log("Historia:", historia())
        return(ka)
    }


    const positiivisia = () => {
      let pos = 0
      let res = 0
      this.state.kaikki.forEach((luku) =>{
        if (luku > 0) {
            pos += 1
        }
      })
      res = pos/len*100
      return(res+" %")
    }

    return (
      <div>
      <h2>Anna palaute</h2>
      <div>
      <Button name="hyvä" instance={this.asetaArvoon('hyva', 1)}/>
      <Button name="neutraali" instance={this.asetaArvoon('neutraali', 0)}/>
      <Button name="huono" instance={this.asetaArvoon('huono', -1)}/>
      </div>
      <h2>Statistiikka</h2>
      <Statistics list={this} keskiarvo={keskiarvo()} positiivisia={positiivisia()}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
