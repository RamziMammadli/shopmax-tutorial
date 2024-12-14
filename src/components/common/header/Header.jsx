import React from "react";
import styles from './Header.module.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigation = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigation('/')}><p className={styles.text}>SHOPMAX</p></div>
      <div className={styles.nav}>
        <button className={styles.btn}>HOME</button>
        <button className={styles.btn}>SHOP</button>
        <button className={styles.btn}>CATALOGUE</button>
        <button className={styles.btn}>NEW ARRIVALS</button>
        <button className={styles.btn}>CONTACT</button>
      </div>
      <div className={styles.iconBox}>
        <button className={styles.iconBtn} ><CiSearch/></button>
        <button className={styles.iconBtn} onClick={() => navigation('/wish')}><CiHeart/></button>
        <button className={styles.iconBtn} onClick={() => navigation('/basket')}><BsFillBasket3Fill/></button>
      </div>
    </header>
  );
};

export default Header;
