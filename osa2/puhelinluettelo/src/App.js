import React from 'react';
import Person from './components/Person.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newPerson: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log('submit- nappia painettu')
    console.log(event.target)
    const personObject = {
      name: this.state.newPerson
    }

    const persons = this.state.persons.concat(personObject)
    console.log(persons)

this.setState({
  persons,
  newPerson: ''
})
}

handlePersonChange = (event) => {
  console.log(event.target.value)
  this.setState({ newPerson: event.target.value })
}

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newPerson} onChange={this.handlePersonChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
         {this.state.persons.map(person => <Person key={person.name} name={person.name} />)}
       </ul>
      </div>
    )
  }
}

export default App
