import React from 'react'
import ReactDOM from 'react-dom'

// Luo komponentin App
//renderöityy div-tagina
const App = () => {
const now = new Date()
const a = 10
const b = 20
return (
  <div>
      <p>Hello world</p>
      <p>React-sovelluksen komponentit ovat teknisesti ottaen Javascript funktioita</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}

// renderöi komponentin sisällön tiedoston public/index.html määrittelemään div-elementtiin, jonka id:n arvona on ‘root’
ReactDOM.render(<App />, document.getElementById('root'))
