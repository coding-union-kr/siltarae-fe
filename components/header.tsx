import React, { useState } from "react";

export default function Header() {
  const [params, setParams] = useState(true);

  return (
    <section className="flex flex-row bg-[#FDF8F3] h-[10vh] justify-between items-center px-5">
      {params ? (
        <div className="bg-gray-300 h-[4rem] w-[4rem]">Logo SVG</div>
      ) : (
        <div>뒤로가기</div>
      )}
      <h1>타이틀(지울거)</h1>
      <div>메뉴바(지울거)</div>
    </section>
  );
}
