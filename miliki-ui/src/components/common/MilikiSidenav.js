import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { IoIosHome, IoIosWallet, IoIosNotifications } from "react-icons/io";

const MilikiSidenav = ({ isSidenavLeft, to }) => {
  return (
    <div>
      {isSidenavLeft ? (
        <aside>
          <div className="absolute w-[258px] h-[768px] py-4 px-10 rounded bg-gradient-to-b from-miliki-gray to-white">
            <ul className="space-y-2">
              <li>
                <Link
                  to={to}
                  className="flex items-center p-2 leading normal lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-black font-inter font-[700] not-italic hover:text-[17px] hover:text-miliki-blue hover:bg-miliki-gray"
                >
                  <IoIosHome className="fill-miliki-blue h-[22px] w-[24px]" />
                  <span className="mt-1 ml-3 items-center">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to={to}
                  className="flex items-center p-2 leading normal lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-black font-inter font-[700] not-italic hover:text-[17px] hover:text-miliki-blue hover:bg-miliki-gray"
                >
                  <IoIosWallet className="fill-miliki-blue h-[22px] w-[24px]" />
                  <span className=" mt-1 ml-3 items-center">Wallet</span>
                </Link>
              </li>
              <li>
                <Link
                  to={to}
                  className="flex items-center p-2 leading normal lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-black font-inter font-[700] not-italic hover:text-[17px] hover:text-miliki-blue hover:bg-miliki-gray"
                >
                  <IoIosNotifications className="fill-miliki-blue h-[22px] w-[24px]" />
                  <span className="mt-1 ml-3 items-center">
                    IoIosNotifications
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : (
        <div className="absolute center w-[258px] h-[768px] py-1 px-3 rounded bg-gradient-to-b from-miliki-gray to-white">
          <div className="flex flex-col py-2 px-1 w-[234px] h-[230px] rounded-[5px] bg-white border border-miliki-gray shadow-md">
            <img
              className="w-[224px] h-[148px] rounded-[5px] items-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9R1_rSgBjrbUT7OJq5rY86qhn6ZqhZlvNQ&usqp=CAU"
              alt="advert"
            />
            <div className="mt-2">
              <Link to={to}>
                <p className="leading-normal items-center lg:text-[18px] md:text-[16px] sm:text-[14px] text-miliki-black font-bold font-inter font-[700] not-italic">
                  Safaricom Shares
                </p>
                <p className="leading-normal items-center lg:text-[14px] md:text-[12px] sm:text-[10px] text-miliki-black font-regular font-inter font-[300] not-italic">
                  Buy shares
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <p className="leading-normal items-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-blue font-bold font-inter font-[800] not-italic">
              Miliki <span className="text-miliki-sky-blue">latest news</span>
            </p>
            <Link to={to}>
              <p className="leading-normal items-center lg:text-[14px] md:text-[12px] sm:text-[10px] text-miliki-black font-regular font-inter font-[400] not-italic">
                Safaricom Shares
              </p>
              <p className="leading-normal items-center lg:text-[14px] md:text-[12px] sm:text-[10px] text-miliki-black font-regular font-inter font-[400] not-italic">
                Buy shares
              </p>
              <p className="leading-normal items-center lg:text-[14px] md:text-[12px] sm:text-[10px] text-miliki-black font-regular font-inter font-[400] not-italic">
                Real estate
              </p>
            </Link>
          </div>
          <div className="mt-5">
            <p className="leading-normal items-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-blue font-bold font-inter font-[800] not-italic">
              Miliki <span className="text-miliki-sky-blue">investment</span>
            </p>
            <div>
              <Link to={to}>
                <p className="leading-normal items-center lg:text-[12px] md:text-[10px] sm:text-[8px] text-miliki-black font-regular font-inter font-[200] not-italic">
                  Rights <span className="px-2">Terms</span>{" "}
                  <span className="px-2">Privacy</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MilikiSidenav.propTypes = {
  isSidenavLeft: PropTypes.bool.isRequired,
};

export default MilikiSidenav;
