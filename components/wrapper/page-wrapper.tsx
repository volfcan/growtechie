import React from "react";
import { NavbarDemo } from "../navbar";
import Footer from "../Footer";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDemo />
      <main className="flex min-w-screen w-full flex-col pt-[12rem] items-center  justify-between">
        {/* <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center "></div> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
