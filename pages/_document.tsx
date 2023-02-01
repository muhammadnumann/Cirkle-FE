import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { lstatSync, readdirSync, readFileSync } from 'fs';
import path from 'path';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req: request = {} } = ctx;
    const initialProps = await Document.getInitialProps(ctx);
    const { cookies = {} } = request || {};

    /* Colors */
    const themeBaseDirPath = path.join(process.cwd(), 'styles/theme-css');
    const themeMap = {};
    if (lstatSync(themeBaseDirPath).isDirectory()) {
      const themeDirs = readdirSync(themeBaseDirPath);
      for (const fi of themeDirs) {
        const fileName = fi.replace(/_([^-]*)-[^.]*\.css$/g, '$1');
        themeMap[fileName] = readFileSync(`${themeBaseDirPath}/${fi}`, 'utf8');
      }

      global.themeCss = themeMap;
    }
    return {
      ...initialProps,
      theme: cookies['g-theme'],
      themeMap,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          {/* <!-- Bootstrap CSS only --> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          {/* <!-- Bootstrap JavaScript Bundle with Popper --> */}
          {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
          {/* <!-- FontAowsem CSS only --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          {/*  eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
