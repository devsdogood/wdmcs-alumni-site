import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../wrappers/AppWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
export default MyApp
