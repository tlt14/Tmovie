import { Link } from "react-router-dom";
import { setTheme } from "../../theme.slice";
import { useDispatch, useSelector } from "react-redux";
import { auth, handleLogin, handleLogout } from "../../config/firebase";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const handleToggleTheme = (e: any) => {
    dispatch(setTheme(!e.target.checked ? "light" : "dark"));
    localStorage.setItem("theme", !e.target.checked ? "light" : "dark");
  };
  const [user, setUser] = useState<User>();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && setUser(user);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center w-2/12">
          {/* <img src={logo} className='w-20 h-11 mr-3' alt='Flowbite Logo' /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
            Tmovie
          </span>
        </Link>
        <div className="flex md:order-1 w-8/12 justify-center ">
          {/* <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button> */}
          <Search />
          {/* <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}
        </div>
        <div
          className="items-center justify-end  md:flex md:w-2/12 md:order-2 flex"
          id="navbar-search "
        >
          <label className="ui-switch mr-3">
            <input
              type="checkbox"
              onChange={handleToggleTheme}
              checked={theme === "dark"}
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>

          {!user && (
            <button
              onClick={handleLogin}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="max-[640px]:hidden">Đăng nhập</span> <FontAwesomeIcon icon={faUser} />
            </button>
          )}
          {user && (
            <div className="flex items-center md:order-2">
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                onClick={() => setIsShow(!isShow)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL || undefined}
                  alt="user_photo"
                />
              </button>
              {/* Dropdown menu */}
              {isShow && (
                <div
                  className="z-50 fixed top-12 right-24  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.displayName}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
