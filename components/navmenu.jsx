import cn from 'classnames'
import styles from './navmenu.module.css'
import Link from 'next/link'

export default function Navmenu({ children, type }) {
  return (
    <>
    <div className={styles.container}>    
    <a href="#" className={styles.btn}><div className={styles.spn}>Home</div></a>
    <a href="#" className={styles.btn}><div className={styles.spn}>About</div></a>
    <a href="#" className={styles.btn}><div className={styles.spn}>Therapy sessions</div></a>
    <a href="#" className={styles.btn}><div className={styles.spn}>Meeting times</div></a>
    <a href="#" className={styles.btn}><div className={styles.spn}>Contact</div></a>
    </div>
    </>
  )
}