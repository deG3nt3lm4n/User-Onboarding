import React, {useState} from 'react'

function PeopleCard({users}) {
  const [selectPerson, setSelectPerson] = useState([])

  const personClick = (e) => {
    // console.log(e.target.innerText)
    let n = e.target.innerText
    let b = users.filter(user => user['name'] || user['first_name'] === n)
    console.log(b)
    setSelectPerson(b)
  }



  return (
    <div className="peopleContainer">
      <div className="personPicker">
        {
          users.map(user => {
            return(
              <div key={Math.random() * 10000000} className="singlePerson" onClick={personClick}>
                <h2>{user.name || user.first_name}</h2>
                <p>{user.email}</p>
              </div>
            )
          })
        }
      </div>
      <div className="personHero">
            {
              selectPerson.map(e => {
                return(
                <div className="singlePersonBigger" key={Math.random() * 1000000}>
                  <img src={e.avatar} alt={e.first_name}/>
                  <h2>{e.first_name} {e.last_name}</h2>
                  <p className="email">{e.email}</p>
                </div>
                )
              })
            }
      </div>

    </div>
  )
}

export default PeopleCard
