import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div
      id="container"
      className="h-fit min-h-screen mx-auto grid place-items-center overflow-x-hidden"
    >
      <Header />
      <div className="mt-[8vh] mb-[10vh] w-[500px] max-w-[500px] bg-[#FDF8F3]">
        {children}
        <NavBar />
      </div>
    </div>
  );
}

export default Layout;
