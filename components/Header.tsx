import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="fixed top-0 backdrop-blur-md h-16 w-full max-w-[500px] border-b border-b-gray-300 z-50">
      <div className="flex flex-row h-full justify-between items-center px-5">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="실타래_로고" width={100} height={50} />
          </Link>
        </div>
      </div>
    </section>
  );
}
