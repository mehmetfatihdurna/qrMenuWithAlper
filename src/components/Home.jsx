import styles from "../assets/styles/Home.module.css"

export default function Home() {
  var width = window.innerWidth;
  return (
    <div className={styles.overlay}>
      <img src="/media/menugenel.png" className={styles.backgroundImage} width={width} />

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
