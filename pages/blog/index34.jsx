import Head from 'next/head';
import Link from 'next/link';
// import Script from 'next/script'
import Layout from '../../components/layout'
import Script from 'next/script'

// data
import { getAllPosts } from '../../lib/api';
import ErrorBoundary from 'next'

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
     


    </Layout>
);

// console.log("salaaam")

export default Blog


