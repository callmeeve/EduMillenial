import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script"
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"/>
      <Script src="https://code.jquery.com/jquery-3.6.1.min.js"/>
      <Component {...pageProps} />
    </>
  )
}