import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div id="container" className="h-screen flex justify-center">
      <Header />
      <div className="mt-[8vh] mb-[10vh] w-[500px] max-w-[500px]">
        {children}
      </div>
      <NavBar />
    </div>
  );
}

export default Layout;
