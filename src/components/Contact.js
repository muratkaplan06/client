import { Component } from 'react'
import { Button } from 'primereact/button'
import SingleContact from './SingleContact'
import { Divider } from 'primereact/divider'
import AddDialog from './AddDialog'

export default class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      dialogVisible: false,
    }
  }
  toggleDialog = () => {
    this.setState((prevState) => ({
      dialogVisible: !prevState.dialogVisible,
    }))
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/contacts')
      .then((res) => res.json())
      .then((data) => this.setState({ contacts: data }))
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 mt-3">
            <Button
              label="Add Contact"
              icon="pi pi-external-link"
              onClick={this.toggleDialog}
              className="p-button-raised p-button-rounded mx-2"
            />
            <Divider />
            <AddDialog
              visible={this.state.dialogVisible}
              onHide={this.toggleDialog}
              header="Add Contact"
            />
          </div>
        </div>
        <div className="row">
          {this.state.contacts.map((item) => (
            <SingleContact key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }
}
