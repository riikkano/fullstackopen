import React from 'react';
import Person from './components/Person.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' ,
        number: '040044450203' }
      ],
      newPerson: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log('submit- nappia painettu')
    console.log(event.target)
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const found = this.state.persons.find(person => person.name === personObject.name)
    if (found !== undefined){
      alert(personObject.name+ " on jo listassa!")
      console.log("Henkilö on jo luettelossa! Nimeä ei tallennettu.")
    } else {
      const persons = this.state.persons.concat(personObject)
      console.log("Henkilö lisätty")
      this.setState({
        persons,
        newPerson: ''
        })
      }
    }

handleNameChange = (event) => {
  console.log("Name handler:", event.target.value)
  this.setState({newName: event.target.value})
}

handleNumberChange = (event) => {
  console.log("Number handler:", event.target.value)
  this.setState({newNumber: event.target.value })
}

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newPerson.name} onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newPerson.number} onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
         {this.state.persons.map(person => <Person key={person.name} person={person}/>)}
       </ul>
      </div>
    )
  }
}

export default App
