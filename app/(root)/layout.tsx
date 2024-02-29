import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNav/> */}

      <section className="root-container">
        <div className="wrapper">{children}</div>
      </section>
    </main>
  );
}
