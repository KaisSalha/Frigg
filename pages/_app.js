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

  return getLayout(<Component {...pageProps}></Component>);
}

export default appWithTranslation(MyApp);
