import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

config.autoAddCss = false;

export default function App({ Component, pageProps, ...rest }: AppProps) {
  // 새롭게 랜더링 되는 방식이라 useState로 단 한번만 실행되게 만들어 준다.
  // 이렇게 하지 않으면, 계속 새로운 QueryClient가 생성되고 전파되어 기존 데이터가 유실되는 상황이 발생!
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
