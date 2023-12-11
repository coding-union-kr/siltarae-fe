import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // 임의로 배경색을 지정해놨습니다.
    <Html lang="ko" className="h-full bg-white">
      <Head />
      <body className="font-pretendard">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
