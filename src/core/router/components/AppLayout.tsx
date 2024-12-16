import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import AuthCheck from "./AuthCheck";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-full bg-gray-100">
        <div className="bg-gray-800 pb-32 shadow-md shadow-black/10">
          <Nav />
        </div>
        <main className="-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-md py-5 px-6 shadow-md shadow-black/10">
              <div className="min-h-[calc(100vh-208px+6rem)] rounded-s border border-dashed border-slate-200 p-2 sm:p-3 lg:p-4 flex">
                <AuthCheck />
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
