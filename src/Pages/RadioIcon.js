import React from 'react'
import styles from './Radio.module.css'

const RadioIcon = (props) => {
    const { selected, onClick } = props;
  return (
    <div className={styles['radio-icon-container']}>
    <div
      className={`${styles['radio-icon']} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {selected && <div className={styles['radio-dot']} />}
    </div>
  </div>
  )
}

export default RadioIcon