import Head from 'next/head';
import Link from 'next/link';
// import Script from 'next/script'
import Layout from '../../components/layout'
import Script from 'next/script'

// data
import { getAllPosts } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';
var itemurl = [];


export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}
  

const Blog = ({ allPosts: { edges } }) => (
    <Layout>

    <div className={styles.container}>
    <Head>
      <title>Blog articles page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>



    <main className={styles.main}>
      <h1 className={styles.title}>Latest blog articles</h1>
      <section className={styles.section} >
        {edges.map(({ node }) => (

          
          <div className={blogStyles.listitem} key={node.id}>
          <Link href={`/blog/${node.slug}`}>
            <div className={blogStyles.readMore}>
              {/* <Link href={`/blog/${node.slug}`}>
                <a>Read more ></a>
              </Link> */}
            </div>
            
            <div className={blogStyles.listitem__thumbnail}>
              <figure>
                {/* <h2>{node.extraPostInfo.thumbnailImage}</h2> */}
                { 
                  <img
                  src={node.extraPostInfo.thumbnailImage?node.extraPostInfo.thumbnailImage.mediaItemUrl:""}
                  alt={node.title}
                />}
              </figure>
            </div>
            <div className={blogStyles.listitem__content}>
              <h2>{node.title}</h2>
              <p>{node.extraPostInfo.authorExcerpt}</p>
              
            </div>
          </Link>
          </div>
          
        ))}
      </section>
    </main>
    </div>
    </Layout>
);

// console.log("salaaam")

export default Blog
