import Head from 'next/head'
git import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Blob from '../components/blob'
import Navmenu from '../components/navmenu'

const name = 'MyMomental'
export const siteTitle = 'Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.main_container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="TEST version of Momental website landing page"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        {/* <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      
      <header className={styles.header}>
        {home ? (
          <>
          <div className={styles.container} >
            <img  className={styles.blob} src="/images/background-blob.png"/>
            <img src="/images/profile.png"  className={styles.logo}   alt="MyMomental" />
          </div>
        <div class="title-container title">
          <div>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>

          <div className='title-container title border-top-orange'>
             <a href="https://mymomental.com">The moment</a> is all that remains.
              <span> </span>
         </div>

        </div>

            <Blob></Blob>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                {/* <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                /> */}
              </a>
            </Link>
            
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>     
        )}
       
      </header>
      <Navmenu></Navmenu>
      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      
     
    </div>
  )
}