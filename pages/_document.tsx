import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import { GlobalStyle } from "../components/ui/globalStyle";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600,700,800,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
