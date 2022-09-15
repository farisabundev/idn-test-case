import '../styles/globals.css';
import '../styles/profile.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
