import React from 'react'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import UpdateDialog from './UpdateDialog'

const SingleContact = ({ item }) => {
  const [visible, setVisible] = React.useState(false)
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/contacts/${item.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))

    window.location.reload()
  }

  return (
    <div className="col-4">
      <div className="card #e8eaf6 indigo lighten-5">
        <div className="card-content white-text">
          <span className="card-title"></span>
        </div>
        <div className="card-action">
          <p>FirstName: {item.firstname}</p>
          <Divider />
          <p>LastName : {item.lastname}</p>
          <Divider />
          <p>{item.email}</p>
          <Divider />
          <Button label="Delete" severity="danger" onClick={handleDelete} />
          <Button
            label="Update"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
            className="p-button-raised p-button-rounded mx-2"
          />
          <UpdateDialog
            header="update Contact"
            visible={visible}
            onHide={() => setVisible(false)}
            item={item}
          />
          {/* <Dialog
            header="Header"
            visible={visible}
            style={{ width: '50vw' }}
            onHide={() => setVisible(false)}
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Dialog> */}
        </div>
      </div>
    </div>
  )
}

export default SingleContact
