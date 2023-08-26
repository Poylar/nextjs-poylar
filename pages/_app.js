import '../styles/globals.css';
import { GlobalDataProvider } from '../context/GlobalDataContext';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalDataProvider>
      <Component {...pageProps} />
    </GlobalDataProvider>
  );
}

export default MyApp;
