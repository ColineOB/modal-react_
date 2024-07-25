import React, { useState } from 'react'
import ModalComponent from './modal'

export const ExampleComponent = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ModalComponent open={open} onClose={handleClose}>
        texte
      </ModalComponent>
      <button onClick={() => setOpen(true)}>open</button>
    </>
  )
}
