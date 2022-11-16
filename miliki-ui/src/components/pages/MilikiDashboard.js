import React from "react";
import MilikiSidenav from "../common/MilikiSidenav";
import MilikiNavbar from "../common/MilikiNavbar";
import MilikiCard from "../common/MilikiCard";


const MilikiDashboard = () => {
  return (
    <div>
      <MilikiNavbar isNavHome={false} />
      <div className="container flex">
        <div className="py-1 px-2">
          <MilikiSidenav isSidenavLeft={true} />
        </div>
        <div className="max-w-[956px] ml-[260px] px-2 py-1 mt-1 bg-white rounded-md">
          <MilikiCard imgSrc="c-dustin-91AQt9p4Mo8-unsplash.jpg" alt="investment" />
          <MilikiCard imgSrc="avi-waxman-f9qZuKoZYoY-unsplash.jpg" alt="investment" />
        </div>
        
        <div className="py-1 px-2">
          <MilikiSidenav isSidenavLeft={false} />
        </div>
      </div>
    </div>
  );
};

export default MilikiDashboard;
