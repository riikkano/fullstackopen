import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.function}>
	   {props.name}
    </button>
  )
}

const Favourites = (props) => {
  return (
    <div>
    <p>{props.funktio}</p>
    <p>has {props.aanet} votes</p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  tulosta(teksti) {
    return () => {
    console.log(teksti)
    }
  }

  aanesta(pisteet) {
    return () => {
    console.log("Anekdootti:", this.state.selected)
    console.log("Pisteet:", this.state.pisteet)
    const kopio = [...pisteet]
    console.log("Kopioidun taulukon elementti, ennen lisäystä:", kopio[this.state.selected])
    kopio[this.state.selected] += 1
    console.log("Pisteet (kopio):", kopio)
    this.setState({pisteet:kopio})
    }
  }

  popularAnecdote(pisteet) {
    console.log("Click")
    return () => {
      pisteet.forEach(function(item, index, array) {
      console.log(item, index);
      });
    }
  }

  arvoAnekdootti(len) {
    console.log("Anekdootteja:", len)
    return () => {
    this.setState({ selected : [Math.floor((Math.random() * (len-1)) )] })
    }
  }

  render() {
    const len = this.props.anecdotes.length

    const votes = () => {
      const pisteet = this.state.pisteet
      var max_of_pisteet = Math.max.apply(Math, pisteet)
      console.log("Parhaat pisteet:", max_of_pisteet)
      return (max_of_pisteet)
    }

    const bestAnecdote= () => {
      const pisteet = this.state.pisteet
      var max_of_pisteet = Math.max.apply(Math, pisteet)
      var pos = pisteet.indexOf(max_of_pisteet)
      console.log("Parhaat pisteet ja anekdootti:", max_of_pisteet, this.props.anecdotes[pos])
      return (this.props.anecdotes[pos])
    }

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br/>
        <Button name="next anecdote" function={this.arvoAnekdootti(len)}/>
        <Button name="vote" function={this.aanesta(this.state.pisteet)} />
        <h2>anecdote with most votes</h2>
        <Favourites funktio={bestAnecdote()} aanet={votes()} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
