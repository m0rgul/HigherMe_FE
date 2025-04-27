import { Outlet } from "react-router-dom";

import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <main className="bg-slate-400 pt-20 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
