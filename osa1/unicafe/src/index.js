import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      kaikki: [],
      positiivisia: 0
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
        this.asetaArvoon(keskiarvo, ka)
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
      this.asetaArvoon(positiivisia, res)
      return(res)
    }

    return (
      <div>
      <h2>Anna palaute</h2>
      <button onClick={this.kasvataHyva.bind(this)}>
      hyvä
      </button>
      <button onClick={this.kasvataNeutraali.bind(this)}>
      neutraali
      </button>
      <button onClick={this.kasvataHuono.bind(this)}>
      huono
      </button>
      <h2>Statistiikka</h2>
      <div>hyvä {this.state.hyva}</div>
      <div>neutraali {this.state.neutraali}</div>
      <div>huono {this.state.huono}</div>
      <div>keskiarvo {keskiarvo()}</div>
      <div>positiivisia {positiivisia()} %</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
