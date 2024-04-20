import { useState } from "react";
import styles from "../assets/styles/Home.module.css";
import useSize from "../libs/useSize";

export default function Home() {
  const windowSize = useSize();

  if (windowSize) {
    return (
      <div className={styles.overlay}>
        <img src="/media/menugenel.png" className={styles.backgroundImage} width={window.innerWidth} />

        <div className={styles.container}>
          <a href="">
            <img src="/media/biralar.png" className={styles.menuItem} />
          </a>

          <img src="/media/anayemekler.png" className={styles.menuItem} />
          <img src="/media/aperatifler.png" className={styles.menuItem} alt="" />
          <img src="/media/alkolluicecekler.png" className={styles.menuItem} alt="" />
        </div>

      </div>
    )
  }

}
