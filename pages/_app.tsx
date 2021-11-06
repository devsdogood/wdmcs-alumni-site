import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../wrappers/AppWrapper';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //     import('bootstrap/dist/js/bootstrap');
  // }, []);
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
export default MyApp
