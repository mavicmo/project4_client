import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//dropdown
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import UserMethods from "../../Services/UserMethods";
const Navbar = () => {
  const [userLogged, setUserLogged] = useState(false);
  const user = UserMethods.getCurrentUser();

  useEffect(() => {
    if (user) {
      setUserLogged(true);
    }
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between shadow-md w-full bg-teal-600 ">
        <h1 className="text-left p-4 ml-5 font-bold font-under text-4xl">
          <a href="/homepage">SimplyBudget.</a>
        </h1>
        <Menu>
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mt-4 mr-10 mb-3"
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>

          {userLogged ? (
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>

                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full text-left px-4 py-2 text-sm"
                        )}
                        onClick={() => {
                          UserMethods.logout();
                          navigate("/");
                          window.location.reload();
                        }}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          ) : null}
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
