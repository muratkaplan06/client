import React, { Component } from 'react'

export default class AddContact extends Component {
  constructor(props) {
    super(props)

    this.firstnameRef = React.createRef()
    this.lastnameRef = React.createRef()
    this.emailRef = React.createRef()
  }

  submitContact(event) {
    event.preventDefault()

    let contact = {
      firstname: this.firstnameRef.current.value,
      lastname: this.lastnameRef.current.value,
      email: this.emailRef.current.value,
    }
    fetch('http://localhost:8080/api/contacts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))

    window.location.reload()
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <form className="col s12" onSubmit={this.submitContact.bind(this)}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  ref={this.firstnameRef}
                  type="text"
                  className="validate"
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  ref={this.lastnameRef}
                  type="text"
                  className="validate"
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input ref={this.emailRef} type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Add Contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
