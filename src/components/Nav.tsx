import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "assets/logo_clean.png";
import defaultProfilePic from "assets/profile.jpg";
import { mainNavigation, userNavigation } from "core/constants/navigation";
import translate from "core/helpers/translate";
import { useAppSelector } from "store/hooks";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const user = useAppSelector((state) => state.user.user);

  const handleLogOut = () => {
    setShowProfileMenu(false);
    console.log("Logging out");
  };

  return (
    <>
      <nav className="bg-slate-700 fixed top-0 left-0 right-0 z-10 shadow-md border-b border-gray-500">
        <div className="flex justify-between items-center py-2 px-4 lg:px-8">
          <Link to={"/feed"} className="flex items-center">
            <img alt="HigherME" src={logo} className="h-12 w-auto" />
          </Link>

          <div
            className="hidden md:flex space-x-4 mx-auto items-center justify-center"
            id="desktopNav"
          >
            {mainNavigation.map((navItem) => (
              <NavLink
                key={navItem.href}
                to={navItem.href}
                className={({ isActive }) =>
                  `relative flex flex-col items-center justify-center min-w-20 text-lg tracking-wide ${
                    isActive ? `text-orange-400` : "text-white"
                  } hover:text-orange-200 transition-all duration-200`
                }
              >
                {navItem.text}
              </NavLink>
            ))}
          </div>

          <button
            className="md:flex p-2 ml-auto lg:ml-0"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                stroke="currentColor"
              />
            </svg>
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
              />
            </svg>
          </button>

          <div className="hidden md:block relative items-center">
            <div className="flex items-center justify-center">
              <button
                className="rounded-full border-2 border-white p-[2px]"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <img
                  src={user.profile?.profilePicture || defaultProfilePic}
                  className="rounded-full overflow-hidden w-10 h-10"
                  alt="Profile"
                />
              </button>

              <span className="text-white ml-2">
                {`${user.profile?.firstName} ${user.profile?.lastName}`}
              </span>
            </div>

            {showProfileMenu && (
              <div
                className="absolute right-8 mt-2 w-48 bg-white rounded-md shadow-lg z-30 
                             before:content-[''] before:block before:w-2 before:h-2 
                             before:bg-white before:rotate-45 before:absolute before:-top-1 
                             before:left-1/2 before:transform before:-translate-x-1/2"
              >
                <ul className="py-1">
                  {userNavigation.map((navItem) => (
                    <li key={navItem.href}>
                      <Link
                        to={navItem.href}
                        onClick={() => setShowProfileMenu(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {navItem.text}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {translate("navigation.signOut")}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-full bg-white z-20 shadow-md transition-all duration-300 ease-in-out ${
            showSearch
              ? "max-h-40 p-4 opacity-100"
              : "max-h-0 p-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pr-10 border border-gray-300 rounded"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </div>

          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowSearch(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-slate-700 z-30 transition-transform duration-300 ease-in-out ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full justify-between">
          <button
            className="absolute top-4 right-4 bg-white text-gray-700 p-2 rounded-full"
            onClick={() => setShowDrawer(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
              />
            </svg>
          </button>

          <div className="space-y-2 pt-8">
            {mainNavigation.map((navItem) => (
              <NavLink
                key={navItem.href}
                to={navItem.href}
                className="flex text-white text-md py-2 items-center"
                onClick={() => setShowDrawer(false)}
              >
                <navItem.icon className="size-4 fill-white stroke-white mr-2" />
                <span>{navItem.text}</span>
              </NavLink>
            ))}
          </div>

          <div className="mt-auto">
            <ul className="py-2 border-t border-slate-300 text-white">
              {userNavigation.map((navItem) => (
                <li key={navItem.href}>
                  <Link
                    to={navItem.href}
                    onClick={() => setShowDrawer(false)}
                    className="block py-2"
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={handleLogOut}
                  className="block w-full text-left py-2"
                >
                  {translate("navigation.signOut")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
