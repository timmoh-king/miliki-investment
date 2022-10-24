import React from "react";

const MilikiLogo = ({ logoStyle }) => {
  return (
    <div
      className={`items-center flex absolute ${
        logoStyle ? logoStyle : ""
      }`}
    >
      <p className="leading-normal text-center text-miliki-blue lg:text-2xl md:text-xl sm:text-md font-inter font-[900] not-italic">
        Miliki <span className="text-miliki-sky-blue">investment</span>
      </p>
    </div>
  );
};

export default MilikiLogo;