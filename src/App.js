import React, { useEffect, useState } from 'react'
import ModalComponent from './modal'

function ExampleComponent() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ModalComponent open={open} onClose={handleClose}>
        text
      </ModalComponent>
      <button onClick={() => setOpen(true)}>open</button>
    </>
  )
}

export default ExampleComponent
