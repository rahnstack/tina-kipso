import Head from "next/head";
import React from "react";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon-16x16.png"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/assets/fonts/MazajBlack.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/bootstrap/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css"
        />

        <link rel="stylesheet" href="/assets/plugins/kipso-icons/style.css" />

        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>

      <div className="page-wrapper">{children}</div>

      <script src="/assets/plugins/bootstrap/jquery.min.js"></script>
      <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>
    </div>
  );
};

export default Layout;
