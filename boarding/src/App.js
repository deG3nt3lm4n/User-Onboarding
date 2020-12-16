import React, {useState, useEffect} from 'react'
import Form from './components/Form'

const initialFormValue = {
  name: '',
  email: '',
  password: '',
  terms: ''
}

const initialUsers = [
  {
    name: 'Jame',
    email: 'jjB@gmail.com',
    password: '123acb',
    terms: true
  }
]


function App() {

  const [formValue, setFormValue] = useState(initialFormValue)
  const [users, setUsers] = useState(initialUsers)


  const formChange = (name, value) => {

    console.log(name , value)


    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      password: formValue.password.trim(),
      terms: formValue.terms
    }
  }



  return (
    <div className="App">
      <h2>My thingy</h2>
      <Form values={formValue} change={formChange} />
    </div>
  );
}

export default App;
