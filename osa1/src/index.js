import React from 'react'
import ReactDOM from 'react-dom'

// Luo komponentin App
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

// renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on ‘root’
ReactDOM.render(<App />, document.getElementById('root'))
