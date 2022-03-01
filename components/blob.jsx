import cn from 'classnames'
import styles from './blob.module.css'
import Link from 'next/link'

export default function Blob({ children, type }) {
  return (
    <>
    <div className={styles.container} >
    <img  className={styles.blob} src="/images/background-blob.png"/>
    <img src="/images/logo.png"  className={styles.logo}   alt="MyMomental" />

    </div>
    </>
  )
}