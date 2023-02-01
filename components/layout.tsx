import styles from './layout.module.css';
import Sidebar from './sidebar';
import Header from './header/header';
import HeaderSecond from './header-second/headerSecond';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useAPIContext } from 'context/api';
import LoadingPage from './loadingpage/loadingpage';
const name = 'cirkle.ai';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import CustomSidebar from './CustomSidebar/Index';
import CustomHeader from './CustomHeader/Index';
// import { string } from 'yup';

export const siteTitle = 'cirkle.ai';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { authError: error, authIsLoading } = useAPIContext();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(authIsLoading);
  }, [authIsLoading, setIsLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (error) return <div>{error.message}</div>;
  const id = router.query.id;
  // const route = router.asPath
  // console.log(id);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      {router.asPath === `/contacts/${id}` ? <HeaderSecond /> : ''}
      {router.asPath === `/time-entries` || `/time-entries` ? (
        <>
          <CustomSidebar isBlue={true} />
          <CustomHeader />
        </>
      ) : (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <div id={styles.content}>{children}</div>
    </>
  );
};

export default withPageAuthRequired(Layout);
