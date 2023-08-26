import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Router, useRouter } from "next/router";

import { Layout } from "@/components/Layout";
import * as mdxComponents from "@/components/mdx";
import { useMobileNavigationStore } from "@/components/MobileNavigation";

import "@/styles/tailwind.css";
import "focus-visible";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("hashChangeStart", onRouteChange);
Router.events.on("routeChangeComplete", onRouteChange);
Router.events.on("routeChangeError", onRouteChange);

export default function App({ Component, pageProps }) {
  let router = useRouter();

  return (
    <>
      <Head>
        {router.pathname === "/" ? (
          <>
            <title>Solarius Help</title>
            <meta property="og:title" content="Solarius Help" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://help.solarius.me/" />
            <meta
              property="og:description"
              content="Solarius Help is a collection of guides and tutorials for Solarius and its products."
            />
          </>
        ) : (
          <>
            <title>{`${pageProps.title} - Solarius Help`}</title>
            <meta
              property="og:title"
              content={`${pageProps.title} - Solarius Help`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://help.solarius.me${router.pathname}`}
            />
            <meta property="og:description" content={pageProps.description} />
          </>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
}
