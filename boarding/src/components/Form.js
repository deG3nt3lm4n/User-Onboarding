import React from 'react'

function Form({values, change}) {

  const onChange = (e) => {
    const { name, value, checked, type } =  e.target
    const newValue = type === 'checkbox' ? checked : value

    change(name, newValue)
  }


  return (
    <div>
      <form>

        <label>
          Name:
          <input type="text" name="name" value={values.name} onChange={onChange} />
        </label>

        <label>
          email:
          <input type="email" name="email" value={values.email} onChange={onChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={values.password} onChange={onChange} />
        </label>

        <label>
          Terms of service :
          <input type="checkbox" name="terms" checked={values.terms} onChange={onChange} />
        </label>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form
