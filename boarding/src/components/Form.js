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
            <input type="text" name="first_name" value={values.first_name} onChange={onChange} />
          </label>
          <h6>{er.first_name}</h6>
        </div>

        <div className="inputDiv">
          <label>
            Last Name:
            <input type="text" name="last_name" value={values.last_name} onChange={onChange} />
          </label>
          <h6>{er.last_name}</h6>
        </div>

        <div className="inputDiv">
          <label>
            Avatar:
            <input type="url" name="avatar" value={values.avatar} onChange={onChange} />
          </label>
          <h6>{er.avatar}</h6>
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
            Role:
            <select onChange={onChange} value={values.role} name="role">
              <option>----</option>
              <option value="student">Student</option>
              <option value="developer">Developer</option>
              <option value="hacker">Hacker</option>
            </select>
          </label>
          <h6>{er.role}</h6>
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
