import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.mainBg};
    font: 1.6rem Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const theme = {
  colors: {
    primary: '#673ab7',
    secondary: '#651fff',
    mainBg: '#121214',
    contrastText: '#FFFFFF',
    wrong: '#FF5722',
    success: '#4CAF50',
  },
  borderRadius: '4px',
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Histórico</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" as="font" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap"
          rel="stylesheet"
          as="font"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
