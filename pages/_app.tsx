import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

config.autoAddCss = false;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ Component, pageProps, ...rest }: AppProps) {
  // 새롭게 랜더링 되는 방식이라 useState로 단 한번만 실행되게 만들어 준다.
  // 이렇게 하지 않으면, 계속 새로운 QueryClient가 생성되고 전파되어 기존 데이터가 유실되는 상황이 발생!
  const [queryClient] = useState(() => new QueryClient());

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
