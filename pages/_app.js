import MainLayout from '../components/layout/main-layout/MainLayout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
