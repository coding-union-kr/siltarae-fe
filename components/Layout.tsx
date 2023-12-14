import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div id="container" className="h-screen flex justify-center">
      <div className="w-[500px] max-w-[500px]">
        <Header />
        {children}
        <NavBar />
      </div>
    </div>
  );
}

export default Layout;
