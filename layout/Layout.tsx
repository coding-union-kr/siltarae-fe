import React from "react";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div id="container" className="h-screen flex justify-center">
      <div className="w-[500px] max-w-[500px]">{children}</div>
    </div>
  );
}

export default Layout;
