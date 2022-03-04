import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navmenu from '../components/navmenu'

export default function Home() {
  return (
    <div className="container">
      <Layout home>
      <Head>
        <title>MyMomental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="grid">
          <a href="#" className="card">
            <h3>Group therapy &rarr;</h3>
            <div className="card-desc"><small>One of the goals of group therapy is to bring people who share similar experiences together.</small></div>
          </a>

          <a href="#" className="card">
            <h3>Personal therapy sessions &rarr;</h3>
            <div><small>Reserve your session now!</small></div>
          </a>

          <a
            href="#"
            className="card">
            <h3>Quiz &rarr;</h3>
            <div><small>Assess your mental health with online tools!</small></div>
          </a>

          <a
            href="#"
            className="card">
            <h3>Our team &rarr;</h3>
            <div><small>Meet our experts!</small></div>
          </a>
          <Link href='/blog'>
           <a className="card">
            <h3>Blog&rarr;</h3>
            <div className="card-desc"><small>Check out the latest posts.</small></div>
          </a>
          </Link>
        </div>
       
      </main>

      <footer>
      <div class="footer-text">
        By [ <a href="https://huasca07.com" target="_blank" rel="noopener noreferrer" class="jsx-c9907ca87fd63b79">mmti</a> ]
      </div>
      <div class="footer-text">
      <h1 className=" small left">
          Read{' '}
          <Link href="/posts/first-post">
            <a>about us!</a>
          </Link>
        </h1>
      </div>

      </footer>
      </Layout>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          height:100%;
          padding: 1rem 0;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
      
        }

        footer {
          width: 100%;
          height: min-content;
          padding: 0px;
          border-top: 1px solid #eaeaea;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          /* white-space: nowrap; */
          justify-content: space-between;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          justify-content: center;
          align-items: center;
        }

        a {
          text-decoration: none;
        }

        
        .description {
          text-align: center;
        }

        .small{
          font-size: medium;
        }

        .left{
          align-self: flex-start;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-justify-content: center;
          justify-content: center;
          // max-width: 80vh; 
          // margin-top: 3rem;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: stretch;
          justify-content: space-between;
          overflow: scroll;
        }

        .card {
          // white-space: nowrap;
          margin: 0.5rem;
          flex-basis: 35%;
          padding: 1.4rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
         
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, box-shadow 0.5s , margin 0.5s;
          transition: transform ease 300ms;
        /* padding: 30px; */
        border-radius: 50px;
        // margin: 30px;
         box-shadow: 0 0 20px #0000003b;
        
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #FF6F61;
          border-color: #FF6F61;
          transform: margin: 1rem;
          box-shadow: 0 0 20px #0000003b;
          transform: translate(0, -10px);
        }

        .card h3 {
          white-space: nowrap;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
