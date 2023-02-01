import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { APIWrapper } from '../context/api';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/layout';
import { useEffect } from 'react';
import { getCookieValue, setCookieValue } from '../utils/helpers';
import '../styles/styles.css';
import { ThemeProvider } from 'next-themes';

import 'normalize.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!getCookieValue('g-theme')) {
      setCookieValue('g-theme', 'light', 2147483647, '/');
    }
  }, []);
  return (
    <ThemeProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <APIWrapper>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </APIWrapper>
        </QueryClientProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
