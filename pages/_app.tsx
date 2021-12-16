import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Fragment, useEffect, useState } from "react";

import Loading from "components/organisms/Loading";

// import css to proyect
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          INA - la plataforma que impulsa el desarrollo sostenible de la agricultura
          peruana
        </title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
