import "styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import "styles/components/nprogress.scss";
import { appWithTranslation } from "next-i18next";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  const settings = Component.settings || { header: {} };

  return getLayout(<Component {...pageProps}></Component>, settings);
}

export default appWithTranslation(MyApp);
