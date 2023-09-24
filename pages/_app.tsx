import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import { safeDarken } from '@mui/system';

import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';

// const cache = createCache({ key: 'css', prepend: true });
import store from "../store";

const th = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
      dark: '#0D47A1', // Set the dark color directly
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={th}>
      <CssBaseline />
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
