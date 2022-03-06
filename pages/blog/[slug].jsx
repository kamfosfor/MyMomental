import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout'

import {  getAllPostsWithSlug, getPost } from '../../lib/api';

import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';


export default function Post({ postData }){
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>hmm...looks like an error </p>;
  }

  const formatDate = date => {
    const newDate = new Date(date);

    return `${newDate. getDate()}/${
      newDate.getMonth() +1
    }/${newDate.getFullYear()}` ;
  };

  return(
    <Layout>
    <div className={styles.container}>

        <Head>
          {/* <title>{postData.title}</title> */}
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          {router.isFallback ?(
            <h2>Loading...</h2>
          ) : (
            <article className={blogStyles.article}>
              <div className={blogStyles.postmeta}>

                <div className={blogStyles.postitem__thumbnail}>
                <figure>
                  {<img src={postData.featuredImage.node?postData.featuredImage.node.sourceUrl:""} alt={postData.title}/>}
                </figure>
               </div>

                <h1 className={blogStyles.post_title}>{postData.title}</h1>
                <p>{formatDate(postData.date)}</p>
                <span style={{height: "100%"}}></span>
                <p className={"backto_button"}>
                  <Link href='/blog'>
                    <a>back to articles</a>
                  </Link>
                </p>

              </div>
              <div 
                className={blogStyles.post_content}
                dangerouslySetInnerHTML={{__html: postData.content}}
              />
            </article>
          )}
         
        </main>
      </div>
      </Layout>
  );
}


export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return{
    paths: allPosts.edges.map(({node}) => `/blog/${node.slug}`) || [],
    fallback: true
  };
}

export async function getStaticProps({params}) {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.post
    }
  };
}
  