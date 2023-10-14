import React from 'react'
import { Dialog } from 'primereact/dialog'
import UpdateContact from './UpdateContact'

const UpdateDialog = ({ visible, onHide, header, item }) => {
  return (
    <Dialog
      header={header}
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
    >
      <p className="m-0">
        <UpdateContact item={item} />
      </p>
    </Dialog>
  )
}

export default UpdateDialog
