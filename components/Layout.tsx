import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import NavBar from "./NavBar";
import Seo from "./Seo";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const router = useRouter();

  return (
    <div
      id="container"
      className="h-full min-h-screen flex justify-center bg-[#FDF8F3]"
    >
      <Seo />
      {router.route.includes("/detailedMistakeFeed/") ? null : <Header />}
      <div className="w-[500px] max-w-[500px] ">{children}</div>
      {router.route.includes("/detailedMistakeFeed/") ? null : <NavBar />}
    </div>
  );
}

export default Layout;
