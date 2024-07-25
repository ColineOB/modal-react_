import React, { useEffect, useState } from 'react'
import ModalComponent from './modal'

function ExampleComponent() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <>
      <ModalComponent open={open} onClose={handleClose}>
        texte
      </ModalComponent>
      <button onClick={() => setOpen(true)}>open</button>
    </>
  )
}

export default ExampleComponent
