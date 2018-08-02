import React from 'react';
import Person from './components/Person.js'
import FilterForm from './components/FilterForm.js'
import NewPersonForm from './components/NewPersonForm.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      showAll: false
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

handleSearch = (event) => {
  console.log("Search handler:", event.target.value)
  this.setState({filter: event.target.value })
}

componentDidMount() {
  console.log('did mount')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      this.setState({ persons: response.data })
    })
}

  render() {
    const personsToShow =
    this.state.showAll ?
    this.state.persons :
    this.state.persons.filter(person =>  person.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
    console.log("Filter:", this.state.filter, "Persons:", this.state.persons.filter(person =>  this.state.filter.toLowerCase().indexOf(person.name.toLowerCase()) > -1))
    console.log("Persons to show:", personsToShow)
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <FilterForm this={this} />
        <h2>Lisää uusi</h2>
        <NewPersonForm this={this} />
        <h2>Numerot</h2>
        <ul>
         {personsToShow.map(person => <Person key={person.name} person={person}/>)}
       </ul>
      </div>
    )
  }
}

export default App
