import { useState } from "react";
import styles from "../assets/styles/Home.module.css";
import useSize from "../libs/useSize";
import Reveal from "./utils/Reveal";

export default function Home() {
  const windowSize = useSize();

  if (windowSize) {
    return (
      <div className={styles.overlay}>
        <img src="/media/menugenel.png" className={styles.backgroundImage} width={window.innerWidth} />

        <div className={styles.container}>
          <Reveal>
            <a href="/menu/contentbiralar">
              <img src="/media/biralar.png" className={styles.menuItem} />
            </a>
          </Reveal>

          <Reveal>
            <a href="/menu/contentanayemekler">
              <img src="/media/anayemekler.png" className={styles.menuItem} />
            </a>
          </Reveal>

          <Reveal>
            <a href="/menu/contentaperatifler">
              <img src="/media/aperatifler.png" className={styles.menuItem} alt="" />
            </a>
          </Reveal>


          <Reveal>
            <a href="/menu/contentalkolluicecekler">
              <img src="/media/alkolluicecekler.png" className={styles.menuItem} alt="" />
            </a>
          </Reveal>

        </div>

      </div>
    )
  }

}
