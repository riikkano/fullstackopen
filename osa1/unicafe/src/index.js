import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
    return (
    <div>
    <button onClick={props.instance}>
    {props.name}
    </button>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
    {props.name} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  const x = props.list.state
  return (
    <div>
    <h2>Statistiikka</h2>
    <Statistic name="hyvä" value={x.hyva}/>
    <Statistic name="neutraali" value={x.neutraali}/>
    <Statistic name="huono" value={x.huono}/>
    <Statistic name="keskiarvo" value={props.keskiarvo}/>
    <Statistic name="positiivisia" value={props.positiivisia}/>
    </div>
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

  kasvataHyva() {
    this.setState({ hyva: this.state.hyva +1,
    kaikki: this.state.kaikki.concat(1)
    })
  }

  kasvataNeutraali() {
    this.setState({ neutraali: this.state.neutraali +1,
    kaikki: this.state.kaikki.concat(0)
    })
  }

  kasvataHuono() {
    this.setState({ huono: this.state.huono +1,
    kaikki: this.state.kaikki.concat(-1)
   })
  }

  asetaArvoon = (x, arvo) => {
    return () => {
      this.setState({ x: arvo })
    }
  }

  render() {
    const historia = () => this.state.kaikki.join(' ')
    let ka = 0
    let len = this.state.kaikki.length

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
      <Button name="hyvä" instance={this.kasvataHyva.bind(this)}/>
      <Button name="neutraali" instance={this.kasvataNeutraali.bind(this)}/>
      <Button name="huono" instance={this.kasvataHuono.bind(this)}/>
      <Statistics list={this} keskiarvo={keskiarvo()} positiivisia={positiivisia()}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
