import React from 'react'
import './App.css'

interface Users {
  name: string
  id: string
}

const App: React.FC = () => {
  const [users, setUsers] = React.useState<Users[]>([])
  const [newUser, setNewUser] = React.useState('')

  React.useEffect(function() {
    fetch('/users')
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        setUsers(json)
      })
  }, [])

  function addNewUser() {
    fetch('/users', {
      method: 'post',
      body: JSON.stringify({ name: newUser }),
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {users.map(function(user) {
          return <p>{user.name}</p>
        })}
        <section>
          <form onSubmit={() => addNewUser()}>
            <label>
              Add User:
              <input
                name="name"
                type="text"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNewUser(event.target.value)
                }}
              />
            </label>
            <input type="submit" value="Add user" />
          </form>
        </section>
      </header>
    </div>
  )
}

export default App
