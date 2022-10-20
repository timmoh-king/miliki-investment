import React from "react";

const MilikiLogo = ({ logoStyle }) => {
  return (
    <div
      className={`items-center flex absolute ${
        logoStyle ? logoStyle : ""
      }`}
    >
      <p className="leading-6 text-center text-miliki-blue text-[20px] font-inter font-[900] not-italic">
        Miliki <span className="text-miliki-sky-blue">investment</span>
      </p>
    </div>
  );
};

export default MilikiLogo;
