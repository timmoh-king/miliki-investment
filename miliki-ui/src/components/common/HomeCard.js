import React from "react";
import { SiGooglemessages } from "react-icons/si";

import {
  IoIosBriefcase,
  IoIosBusiness,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io";

const HomeCard = ({
  isInvestor,
  imgSrc,
  imgSrc2,
  alt,
  alt2,
  investorName,
  investorNationality,
  investorRole,
  investorCompany,
}) => {
  return (
    <>
      {isInvestor ? (
        <div className="max-w-sm bg-white rounded-lg mx-4 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="px-2 py-2 rounded-[15px] w-full"
            src={imgSrc}
            alt={alt}
          />
          <div className="px-3">
            <p className="mb-3 py-4 font-normal text-justify text-miliki-dark">
              Here are the biggest enterprise technology here are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order. acquisitions of so far, in reverse
              chronological order.
            </p>
          </div>
          <div className="flex flex-row px-2 mb-2">
            <p className="text-black text-xl font-semibold">{investorName}</p>
            <p className="text-black ml-[218px] text-xl font-semibold">
              {investorNationality}
            </p>
          </div>
          <div className="flex flex-col px-2">
            <div className="flex flex-row">
              <IoIosBriefcase className="fill-miliki-blue h-[23px] w-[23px]" />
              <p className="text-miliki-black font-normal m-1">
                {investorRole}
              </p>
            </div>
            <div className="mt-1 flex flex-row">
              <IoIosBusiness className="fill-miliki-blue h-[23px] w-[23px]" />
              <p className="text-miliki-black font-normal m-1">
                {investorCompany}
              </p>
            </div>
          </div>
          <div className="flex flex-row place-content-center py-4 mr-5 w-full">
            <IoLogoFacebook className="fill-miliki-blue m-1 h-[23px] w-[23px]" />
            <IoLogoLinkedin className="fill-miliki-blue m-1 h-[23px] w-[23px]" />
            <IoLogoGithub className="fill-miliki-blue m-1 h-[23px] w-[23px]" />
            <IoLogoTwitter className="fill-miliki-blue m-1 h-[23px] w-[23px]" />
          </div>
        </div>
      ) : (
        <div className="max-w-sm mx-2 py-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="py-4 grid place-content-center w-full place-content-center">
            <img
              className="rounded-full img-fluid h-[105px] w-[105px]"
              src={imgSrc2}
              alt={alt2}
            />
          </div>
          <div className="py-8 grid place-content-center w-full place-content-center">
            <SiGooglemessages className="fill-miliki-blue h-[33px] w-[33px]" />
          </div>
          <p className="mb-3 px-4 font-normal text-justify text-miliki-dark">
            Here are the biggest enterprise technology here are the biggest
            enterprise technology acquisitions of 2021 so far, in reverse
            chronological order. acquisitions of 2021 so far, in reverse of so
            far, in reverse chronological order. acquisitions of 2021 so far, in
            reverse chronological order. acquisitions of 2021 so far, in reverse
            of so far, in reverse chronological order.
          </p>
        </div>
      )}
    </>
  );
};

export default HomeCard;
