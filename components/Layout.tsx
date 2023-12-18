import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div id="container" className="h-auto flex justify-center">
      <Header />
      {/* 헤더, 네비게이션 제외하고 보이는 부분 - 마진 위아래 추가 */}
      <div className="my-16 w-[500px] max-w-[500px] bg-[#FDF8F3]">
        {children}
      </div>
      <NavBar />
    </div>
  );
}

export default Layout;
