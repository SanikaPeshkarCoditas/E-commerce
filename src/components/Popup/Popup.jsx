import React from 'react'
import styles from './popup.module.css'
function Popup({children,onClose}) {
  return (
    <div className={styles.PopupContainer}>
        <span onClick={()=>onClose()} className={styles.CloseButton}>X</span>
        {children}
    </div>
  )
}

export default Popup