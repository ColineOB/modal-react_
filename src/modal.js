import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

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
      setAnimationClass(styles.fadeIn)
    } else {
      setAnimationClass('')
      setTimeout(() => setDisplay('none'))
    }
  }, [open])

  const styleG = {
    display,
    '--fade-duration': `${fadeDuration}ms`,
    '--fade-delay': `${fadeDelay}ms`,
    '--background-Color': 'rgba(0, 0, 0,' + opacityBackground + ')'
  }

  return (
    <div className={`${styles.modal} ${animationClass}`} style={styleG}>
      <div className={styles.modalBox}>
        <div className={styles.modalBoxClose} onClick={onClose}>
          {closeText}
        </div>
        {children}
      </div>
    </div>
  )
}

export default ModalComponent
