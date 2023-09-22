import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
