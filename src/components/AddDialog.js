import React from 'react'
import { Dialog } from 'primereact/dialog'
import AddContact from './AddContact'

const AddDialog = ({ visible, onHide, header }) => {
  return (
    <Dialog
      header={header}
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
    >
      <p className="m-0">
        <AddContact />
      </p>
    </Dialog>
  )
}

export default AddDialog
