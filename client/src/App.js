/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>정석현
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import './App.css'
import axios from 'axios'
import { useState, useEffect} from 'react'
import User from './components/User'

function App() {
  const [ListOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')


  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response)=> {
      setListOfUsers(response.data)
    })
  }, [])

  const createUser = () => {
        axios
          .post('http://localhost:3001/createUser', { name, age, username })
          .then((response) => {
            alert('User Created!')
            setListOfUsers([...ListOfUsers, { name, age, username }])
          })
      }

  return (
    <div className='App'>
      <div className='grid'>
        {ListOfUsers.map((user)=>{
          return(
            <div>
              <User user={user}/>
            </div>
          )
        })}
      </div>
      <div className="register">
        <input className="input"
          type='text'
          placeholder='Name'
          onChange={(event) => setName(event.target.value)}
        />
        <input className="input"
        type='number'
          placeholder='Age'
          onChange={(event) => setAge(event.target.value)}
        />
        <input className= "input"
          type='text'
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  )
}

export default App