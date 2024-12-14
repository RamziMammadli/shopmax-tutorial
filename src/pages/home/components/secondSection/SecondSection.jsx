import React from 'react'
import styles from './SecondSection.module.css'

const SecondSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.context}>
            <div className={styles.leftSide}>
                <button className={styles.btn}>WOMEN</button>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.topSide}>
                   <button className={styles.btn}>MEN</button>
                </div>
                <div className={styles.bottomSide}>
                   <button className={styles.btn}>SHOES</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondSection