import React, { useEffect, useState } from 'react'
import './styles.module.css'

const ModalComponent = ({
  open = false,
  onClose = () => {},
  closeText = 'x',
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
  fadeDelay = '0',
  opacityBackground = '0.7',
  textAlign = 'left',
  children
}) => {
  const [display, setDisplay] = useState('none')
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    if (open === true) {
      setDisplay('block')
      setAnimationClass('fade-in')
    } else {
      setAnimationClass('fade-out')
      setTimeout(() => setDisplay('none'), parseInt(fadeDuration))
    }
  }, [open])

  const styleG = {
    display,
    zIndex: 1,
    position: 'fixed',
    left: 0,
    top: 0,
    overflow: 'auto',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0,' + opacityBackground + ')'
  }

  const styleModal = {
    display: 'block',
    position: 'relative',
    margin: '15% auto',
    padding: '20px 30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    textAlign: textAlign,
    width: '40%',
    boxShadow: '0px 0px 22px 3px #000000'
  }

  const styleButton = {
    position: 'absolute',
    top: '-12px',
    right: '-12px',
    borderRadius: '50%',
    backgroundColor: 'black',
    color: 'white',
    height: '25px',
    width: '25px',
    lineHeight: '25px',
    textAlign: 'center',
    fontWeight: 300,
    fontFamily: 'Arial'
  }

  return (
    <div className={`modal ${animationClass}`} style={styleG}>
      <div style={styleModal}>
        <div style={styleButton} onClick={onClose}>
          {closeText}
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalComponent
