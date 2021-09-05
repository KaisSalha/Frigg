import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__ || "en";
    return (
      <Html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
