import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import NavBar from "./NavBar";
import PostHeader from "./PostHeader";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const router = useRouter();

  return (
    <div id="container" className="h-auto flex justify-center">
      {router.pathname === "/detailedMistakeFeed" ? <PostHeader /> : <Header />}
      <div className="my-16 w-[500px] max-w-[500px] bg-[#FDF8F3]">
        {children}
      </div>
      {router.pathname === "/detailedMistakeFeed" ? null : <NavBar />}
    </div>
  );
}

export default Layout;
