import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__ || "en";
    return (
      <Html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
