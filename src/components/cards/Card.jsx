import React from 'react'
import styles from './Card.module.css'
import { CiHeart } from 'react-icons/ci'
import { BiBasket } from 'react-icons/bi'

const Card = ({item,addtobasket, addtowish}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgBox}>
            <img className={styles.img} src={item.thumbnail} alt={item.title} />
        </div>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>{item.price}</p>
        <button className={styles.wishBtn} onClick={addtowish}><CiHeart size={25}/></button>
        <button className={styles.basketBtn} onClick={addtobasket}>Add to <BiBasket size={20} /></button>
    </div>
  )
}

export default Card