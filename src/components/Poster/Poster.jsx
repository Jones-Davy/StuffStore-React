import React from 'react'

import styles from '../../styles/Home.module.css'
import BG from '../../images/computer.png'

const Poster = () => {
  return (
    <section className={styles.home}>
        <h2 className={styles.title}>BIG SALE 20%</h2>
        <div className={styles.product}>
            <div className={styles.text}>
                <h3 className={styles.subtitle}>the besteller of 2023</h3>
                <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="computer" />
            </div>
        </div>
    </section>
  )
}

export default Poster