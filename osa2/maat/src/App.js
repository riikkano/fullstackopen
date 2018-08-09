import React from 'react';
import Search  from './components/Search.js';
import List  from './components/List.js';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter : '',
      allCountries : [],
      showAll : '',
    }
    console.log('constructor')
  }



  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        console.log('promise fulfilled')
        this.setState({ allCountries: response.data })
      })

  }

  handleSearch= (event) => {
    this.setState({filter: event.target.value})
    console.log("This:", event.target.value)
  }

  render(){
    const countriesToShow =
    this.state.showAll ?
    this.state.allCountries :
    this.state.allCountries.filter(country =>  country.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
    const listLength = Object.keys(countriesToShow).length
    console.log(listLength)
    console.log(countriesToShow)

    return (
      <div>
      <Search state={this.state} handleSearch={this.handleSearch} />
      <List countriesToShow={countriesToShow} length={listLength} />
      </div>

    )
  }
}

export default App
