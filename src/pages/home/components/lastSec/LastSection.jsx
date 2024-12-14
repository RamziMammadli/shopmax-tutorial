import React from 'react'
import styles from './LastSection.module.css'

const LastSection = () => {
  return (
<section className={styles.container}>
        <div className={styles.context}>
          <div className={styles.imgBox}><img className={styles.img} src="https://preview.colorlib.com/theme/shopmax/images/model_6.png" alt="branding" /></div>
          <div  className={styles.textBox}>
              <div className={styles.textHead}>
                 <p className={styles.textBoxA}>#NEW SUMMER COLLECTION 2019</p>
                 <h1 className={styles.textBoxB}>NEW SHOES</h1>
              </div>
              <button className={styles.textBtn}>SHOP NOW</button>
          </div>
        </div>
    </section>
  )
}

export default LastSection