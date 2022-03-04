import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    // Wrap the Component prop with ErrorBoundary component
      <Component {...pageProps} />
  )
}

export default MyApp

