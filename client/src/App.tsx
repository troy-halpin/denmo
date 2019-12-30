import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Users {
  name: string
  id: string
}

const App: React.FC = () => {
  const [users, setUsers] = React.useState<Users[]>([])

  const json = fetch('/users')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      setUsers(json)
    })

  console.log({ json })
  return (
    <div className="App">
      <header className="App-header">
        {users.map(function(user) {
          return <p>{user.name}</p>
        })}
      </header>
    </div>
  )
}

export default App
