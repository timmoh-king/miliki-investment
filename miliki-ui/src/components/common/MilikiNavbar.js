import React from "react";
import MilikiLogo from "./MilikiLogo";
import MilikiButton from "./MilikiButton";
import { PropTypes } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {
  IoIosMenu,
  IoIosHome,
  IoIosWallet,
  IoIosNotifications,
} from "react-icons/io";

const MilikiNavbar = (to, isNavHome, imgSrc) => {
  return (
    <div>
      <nav className="bg-white w-full max-h-[60px] shadow shadow-miliki-gray-900 lg:px-1 md:px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={to} className="items-center flex">
            <MilikiLogo />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-miliki-black rounded-lg md:hidden hover:bg-miliki-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-miliki-black-400 dark:hover:text-miliki-blue-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <IoIosMenu className="fill-miliki-blue h-[22px] w-[24px]" />
          </button>
          {isNavHome ? (
            <div className="hidden justify-between items-center md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 mt-4 w-full rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-3 leading normal lg:text-[18px] md:text-[16px] sm:text-[14px] text-miliki-black font-inter font-[700] not-italic hover:text-[19px] hover:text-miliki-blue hover:bg-miliki-gray md:p-0"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-3 leading normal lg:text-[18px] md:text-[16px] sm:text-[14px] text-miliki-black font-inter font-[700] not-italic hover:text-[19px] hover:text-miliki-blue hover:bg-miliki-gray md:p-0"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-3 leading normal lg:text-[18px] md:text-[16px] sm:text-[14px] text-miliki-black font-inter font-[700] not-italic hover:text-[19px] hover:text-miliki-blue hover:bg-miliki-gray md:p-0"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-3 leading normal lg:text-[18px] md:text-[16px] sm:text-[14px] text-miliki-black font-inter font-[700] not-italic hover:text-[19px] hover:text-miliki-blue hover:bg-miliki-gray md:p-0"
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
              <div className="flex flex-row ml-8 mb-2">
                <MilikiButton
                  isButtonForm={false}
                  buttonText="Sign in"
                  buttonStyle="bg-white mx-3 text-black ring-miliki-blue ring-[1px] h-[34px] hover:bg-miliki-blue hover:text-white hover:ring-[0px]"
                />
                <MilikiButton
                  isButtonForm={false}
                  buttonText="Register"
                  buttonStyle="hover:ring-[1px] hover:ring-miliki-blue"
                />
              </div>

            </div>
          ) : (
            <div className="hidden justify-between items-center md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 mt-3 w-full rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-5 leading md:p-0"
                    aria-current="page"
                  >
                    <IoIosHome className="fill-miliki-blue h-[22px] w-[24px]" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-5 leading md:p-0"
                  >
                    <IoIosWallet className="fill-miliki-blue h-[22px] w-[24px]" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={to}
                    className="block py-2 pr-4 pl-5 leading md:p-0"
                  >
                    <IoIosNotifications className="fill-miliki-blue h-[22px] w-[24px]" />
                  </NavLink>
                </li>
              </ul>
              <div className="flex flex-row ml-8 mb-2">
                <div className="h-[40px] w-[40px] rounded-full bg-white mx-10">
                  <img
                    src={imgSrc}
                    alt="avatar"
                    className="h-[100%] w-[100%] items-center rounded-full border border-miliki-sky-blue"
                  />
                </div>
                <MilikiButton
                  isButtonForm={false}
                  buttonText="Log out"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

MilikiNavbar.propTypes = {
  isNavHome: PropTypes.bool.isRequired,
};

export default MilikiNavbar;