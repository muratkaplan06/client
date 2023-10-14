import React, { useState } from 'react'

function UpdateContact({ item }) {
  const [formData, setFormData] = useState({
    firstname: item.firstname,
    lastname: item.lastname,
    email: item.email,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedContact = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
    }

    fetch(`http://localhost:8080/api/contacts/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedContact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="firstname"
              type="text"
              className="validate"
              value={formData.firstname}
              onChange={handleChange}
            />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              name="lastname"
              type="text"
              className="validate"
              value={formData.lastname}
              onChange={handleChange}
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              name="email"
              type="email"
              className="validate"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i className="material-icons right">Update</i>
        </button>
      </form>
    </div>
  )
}

export default UpdateContact
