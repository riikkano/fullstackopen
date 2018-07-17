import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  kasvataHyva() {
    this.setState({ hyva: this.state.hyva +1 })
  }

  kasvataNeutraali() {
    this.setState({ neutraali: this.state.neutraali +1 })
  }

  kasvataHuono() {
    this.setState({ huono: this.state.huono +1 })
  }

  render() {
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
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
