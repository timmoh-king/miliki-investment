import React from "react";
import MilikiLogo from "./MilikiLogo";
import { Link } from "react-router-dom";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io";

const MilikiFooter = ({ to }) => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-2 mt-[85px] mb-[25px] gap-8 py-8 px-6 md:grid-cols-4">
        <div className="flex-start">
          <div className="mt-14">
            <MilikiLogo />
          </div>
          <br />
          <br />
          <div className="flex flex-row items-center px-4">
            <Link to={to}>
              <IoLogoFacebook className="rounded-full fill-miliki-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoGithub className="rounded-full fill-miliki-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoLinkedin className="rounded-full fill-miliki-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoTwitter className="rounded-full fill-miliki-blue m-1 h-[23px] w-[23px]" />
            </Link>
          </div>
        </div>
        <div className="flex-start">
          <h2 className="mb-6 text-left text-xl font-bold text-black dark:text-gray-400">
            Save with us
          </h2>
          <ul className="text-left text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link to={to} className="align-start hover:underline">
                Deposit
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Buy shares
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Pay via M-pesa
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Dividends
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-start">
          <h2 className="mb-6 text-left text-xl font-bold text-black dark:text-gray-400">
            Credit
          </h2>
          <ul className="text-left text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link to={to} className="align-start hover:underline">
                Borrow credit
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Emergency loan
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Development loan
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Lipa polepole
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-start">
          <h2 className="mb-6 text-left text-xl font-bold text-black dark:text-gray-400">
            Invest
          </h2>
          <ul className="text-left text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link to={to} className="align-start hover:underline">
                Invest
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Buy shares
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Real estate
              </Link>
            </li>
            <li className="mb-4">
              <Link to={to} className="hover:underline">
                Interest rates
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[48px] bg-miliki-gray">
        <div className="container mx-auto h-[26px] bg-miliki-gray md:flex md:items-center md:justify-between md:p-6">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022
            <Link to={to} className="hover:underline">
              Miliki investment
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={to} className="mr-4 hover:underline md:mr-6 ">
                Terms
              </Link>
            </li>
            <li>
              <Link to={to} className="mr-4 hover:underline md:mr-6">
                Privacy
              </Link>
            </li>
            <li>
              <Link to={to} className="mr-4 hover:underline md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to={to} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MilikiFooter;
