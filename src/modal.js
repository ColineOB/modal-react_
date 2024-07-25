import React, { useEffect } from 'react'
import './styles.module.css'

const ModalComponent = ({
  open = false,
  onClose = () => {},
  closeExisting = true,
  clickClose = true,
  closeText = 'Close',
  closeClass = '',
  showClose = true,
  modalClass = 'modal',
  blockerClass = 'modal',
  spinnerElement = (
    <div>
      <div className='rect1' />
      <div className='rect2' />
      <div className='rect3' />
      <div className='rect4' />
    </div>
  ),
  showSpinner = true,
  fadeDuration = '250',
  fadeDelay = '0'
}) => {
  let display = 'none'

  useEffect(() => {
    display = 'block'
  }, [open])

  const styles = { display: display, color: 'red' }

  return (
    <div style={styles}>
      <button onClick={onClose}>{closeText}</button>
    </div>
  )
}

export default ModalComponent
