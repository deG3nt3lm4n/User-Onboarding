import React from 'react'

function Form({values, change, submmit, er, isDisable,u}) {

  const onChange = (e) => {
    const { name, value, checked, type } =  e.target
    const newValue = type === 'checkbox' ? checked : value

    change(name, newValue)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    submmit()
  }


  return (
    <div className="form-div">

      <form onSubmit={onSubmit}>

        <div className="inputDiv">
          <label>
            Name:
            <input type="text" name="name" value={values.name} onChange={onChange} />
          </label>
          <h6>{er.name}</h6>
        </div>

        <div className="inputDiv">
          <label>
            email:
            <input type="email" name="email" value={values.email} onChange={onChange} />
          </label>
          <h6>{er.email}</h6>
        </div>

        <div className="inputDiv">
          <label>
            Password:
            <input type="password" name="password" value={values.password} onChange={onChange} />
          </label>
          <h6>{er.password}</h6>
        </div>

        <div className="inputDiv">
          <label>
            Terms of service :
            <input type="checkbox" name="terms" checked={values.terms} onChange={onChange} />
          </label>
          <h6>{er.terms}</h6>
        </div>

        <button disabled={isDisable}>Submit</button>

      </form>

      <div className="hardData">
        <pre>
          {
            JSON.stringify(u)
          }
        </pre>
      </div>
    </div>
  )
}

export default Form
