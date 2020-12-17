import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import axios from 'axios'
import schema from './schema/schema'
import PeopleCard from './components/PeopleCard'
import * as yup from 'yup'

const initialFormValue = {
  first_name: '',
  last_name: '',
  avatar: '',
  email: '',
  password: '',
  role: '',
  terms: false
}

const initialError = {
  first_name: '',
  last_name:'',
  avatar: '',
  email: '',
  password: '',
  role: '',
  terms: ''
}

const intialDisabled = true

function App() {

  const [formValue, setFormValue] = useState(initialFormValue)
  const [users, setUsers] = useState([])
  const [errorsF , setErrors] = useState(initialError)
  const [isDisable, setIsDisabled] = useState(intialDisabled)

  const setFriend = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => console.log(err))
  }

  const formChange = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errorsF,
          [name]: "",
        })
      })
      .catch((err) => {
        setErrors({
          ...errorsF,
          [name]: err.errors[0]
        })
      })


    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
      setFormValue(initialFormValue);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    });
  };

  const formSubmit = () => {

    const newUser = {
      first_name: formValue.first_name.trim(),
      email: formValue.email.trim(),
      last_name: formValue.last_name.trim(),
      avatar: formValue.avatar === '' ? 'https://media.giphy.com/media/xTiTnglxjavpMILKGk/giphy-downsized.gif' : formValue.avatar,
      password: formValue.password.trim(),
      role: formValue.role,
      terms: ['terms'].filter((term) => formValue[term])
    }

    postNewUser(newUser)

  }

  useEffect(() => {
    setFriend()
  },[])

  useEffect(() => {
    schema.isValid(formValue).then(valid => setIsDisabled(!valid))
  },[formValue])



  return (
    <div className="App">
      <header className="main-header">
        <h2>My thingy</h2>
      </header>

      <Form values={formValue} change={formChange} submmit={formSubmit} er={errorsF} isDisable={isDisable} u={users}/>

      <PeopleCard users={users} />
    </div>
  );
}

export default App;
