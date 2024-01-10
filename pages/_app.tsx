import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

config.autoAddCss = false;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Redux, ReactQuery 배치 순서
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}
