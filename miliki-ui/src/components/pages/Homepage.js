import React from "react";
import { Link } from "react-router-dom";
import MilikiNavbar from "../common/MilikiNavbar";
import HomeCard from "../common/HomeCard";
import MilikiButton from "../common/MilikiButton";
import MilikiFooter from "../common/MilikiFooter";
import { SiGooglemessages } from "react-icons/si";
import {
  IoIosCalendar,
  IoMdSettings,
  IoMdWallet,
  IoIosRocket,
} from "react-icons/io";

export const IconComponent = ({ iconComponentStyle, icon }) => {
  return (
    <div
      className={`flex items-center justify-center border-[0.5px] border-gray-300 p-[10px] w-[2.8em] h-[2.5em]  ${
        iconComponentStyle ? iconComponentStyle : "bg-white rounded-md"
      } `}
    >
      {icon}
    </div>
  );
};
export const EventsSectionDecorators = () => {
  return (
    <>
      <img
        src="EventsDecorationOne.png"
        alt={"Events section decorator one"}
        className={"absolute -top-[3em]  left-[14rem] w-[12em]"}
      />
      <img
        src="EventsDecorationTwo.png"
        alt={"Events section decorator two"}
        className={"absolute -left-20 top-40 w-[12em]"}
      />
      <img
        src="EventsDecorationThree.png"
        alt={"Events section decorator three"}
        className={"absolute left-20 -bottom-[3em] w-[12em]"}
      />
    </>
  );
};
export const TitleComponent = ({
  titleIcon,
  titleContainerStyle,
  titleDetails,
  titleStyle,
}) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        titleContainerStyle ? titleContainerStyle : ""
      }`}
    >
      {titleIcon}
      <h2
        className={`text-miliki-blue mt-1 px-1 text-[28px] font-bold m-0 ${
          titleStyle ? titleStyle : ""
        }`}
      >
        {titleDetails}
      </h2>
    </div>
  );
};
export const HeroSection = () => {
  return (
    <div className="items-center bg-miliki-gray">
      <div className="container text-center mx-auto mt-1 pt-[100px] pb-[100px]">
        <p className="mb-[50px] text-center text-2xl font-bold text-miliki-blue">
          Saving
          <span className="text-miliki-black">
            platform for digital workers
          </span>
        </p>
        <p className="mb-[50px] px-10 text-center text-normal text-miliki-black">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only fiveis simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </p>
        <p className="text center text-normal text-miliki-black italic">
          <span className="text-2xl text-miliki-blue">“</span>in banking the
          only thing you need to sell is trust
          <span className="text-2xl text-miliki-blue">”</span>
        </p>
      </div>
    </div>
  );
};
export const ExploreSection = () => {
  return (
    <div className="bg-white items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-[50px] mb-[50px] mx-auto items-flex flex-row">
        <div className="mt-[50px]">
          <div className="flex flex-row py-4">
            <IconComponent
              icon={<SiGooglemessages className="fill-miliki-blue" />}
            />
            <TitleComponent titleDetails="Explore more about us" />
          </div>
          <p className="py-6 mr-5 text-start text-normal text-miliki-black">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
          </p>
          <div className="flex flex-row gap-2 py-4 gap-8 md:gap-1">
            <MilikiButton
              to="/signup"
              isButtonForm={false}
              buttonText="Register"
              buttonStyle="w-[64px] md:w-[130px] hover:ring-[1px] hover:ring-miliki-blue text-sm md:text-md"
            />
            <MilikiButton
              to="/"
              isButtonForm={false}
              buttonText="Explore"
              buttonStyle="bg-white mx-3 text-black w-[64px] md:w-[130px] ring-miliki-blue ring-[1px] h-[34px] hover:bg-miliki-blue hover:text-white hover:ring-[0px] text-sm md:text-md"
            />
          </div>
        </div>
        <div>
          <img
            className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Explore more about us"
          />
        </div>
      </div>
    </div>
  );
};
export const EventsFeatured = () => {
  return (
    <div className="bg-white items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-[50px] mb-[50px] mx-auto items-flex flex-row">
        <div className="mt-[50px]">
          <div className="flex flex-row py-4">
            <IconComponent
              icon={<IoIosCalendar className="fill-miliki-blue" />}
            />
            <TitleComponent titleDetails="Events Featured" />
          </div>
          <p className="py-6 mr-5 text-start text-normal text-miliki-black">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
          </p>
          <div className="flex flex-row gap-2 py-4">
            <MilikiButton
              to="/"
              isButtonForm={false}
              buttonText="Explore"
              buttonStyle="bg-white w-[64px] md:w-[130px] text-sm md:text-md text-black ring-miliki-blue ring-[1px] h-[34px] hover:bg-miliki-blue hover:text-white hover:ring-[0px]"
            />
          </div>
        </div>
        <div>
          <img
            className="w-full rounded-md object-cover"
            src="israel-andrade-YI_9SivVt_s-unsplash.jpg"
            alt="Explore more about us"
          />
        </div>
      </div>
    </div>
  );
};
export const OfferSection = ({to}) => {
  return (
    <div className="bg-miliki-gray items-center">
      <div className="container grid grid-cols-1 mt-[50px] mb-[50px] mx-auto items-flex flex-row md:grid-cols-2">
        <div className="mt-[50px] mb-[50px]">
          <img
            className="w-full rounded-md"
            src="patrick-tomasso-fMntI8HAAB8-unsplash.jpg"
            alt="Explore more about us"
          />
        </div>
        <div className="mt-[10px] ml-5">
          <div className="flex flex-row py-4">
            <IconComponent
              icon={<IoMdSettings className="fill-miliki-blue" />}
            />
            <TitleComponent titleDetails="What we offer" />
          </div>
          <p className="py-2 text-start text-normal text-miliki-black">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex flex-row py-4">
            <Link
              to={to}
              className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-miliki-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <IconComponent
                icon={<IoMdWallet className="fill-miliki-blue" />}
              />
              <h5 className="py-2 text-start text-xl font-bold tracking-tight text-miliki-blue">
                Financial control
              </h5>
              <p className="font-normal text-start text-miliki-black">
                is simply dummy text of the printing and typesetting industry.
              </p>
            </Link>
            <Link
              to={to}
              className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-miliki-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <IconComponent
                icon={<IoMdWallet className="fill-miliki-blue" />}
              />
              <h5 className="py-2 text-start text-xl font-bold tracking-tight text-miliki-blue">
                Financial control
              </h5>
              <p className="font-normal text-start text-miliki-black">
                is simply dummy text of the printing and typesetting industry.
              </p>
            </Link>
          </div>
          <div className="flex flex-row py-4">
            <Link
              to={to}
              className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-miliki-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <IconComponent
                icon={<IoMdWallet className="fill-miliki-blue" />}
              />
              <h5 className="py-2 text-start text-xl font-bold tracking-tight text-miliki-blue">
                Financial control
              </h5>
              <p className="font-normal text-start text-miliki-black">
                is simply dummy text of the printing and typesetting industry.
              </p>
            </Link>
            <Link
              to={to}
              className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-miliki-gray dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <IconComponent
                icon={<IoMdWallet className="fill-miliki-blue" />}
              />
              <h5 className="py-2 text-start text-xl font-bold tracking-tight text-miliki-blue">
                Financial control
              </h5>
              <p className="font-normal text-start text-miliki-black">
                is simply dummy text of the printing and typesetting industry.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FeaturedInvestors = () => {
  return (
    <div className="bg-white items-center">
      <div className="container mt-[50px] mb-[50px] mx-auto">
        <div className="flex flex-row py-4">
          <IconComponent icon={<IoIosRocket className="fill-miliki-blue" />} />
          <TitleComponent titleDetails="Our Featured Investors" />
        </div>
        <div className="container grid grid-cols-1 flex flex-row mb-[50px] md:grid-cols-1">
          <div>
          <p className="py-2 mr-5 text-start text-normal text-miliki-black">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five
          </p>
          </div>
          <div className="mt-4">
            <MilikiButton to="/signin" isButtonForm={false} buttonText="Invest" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const InvestorCards = () => {
  return (
    <div className="flex flex-row grid place-content-center mb-[125px]">
      <div className="container grid grid-cols-1 flex flex-row mx-auto md:grid-cols-3">
        <HomeCard
          isInvestor={true}
          imgSrc="etty-fidele-AzVexpHvuKY-unsplash.jpg"
          alt="John Doe"
          investorName="John Doe"
          investorNationality="Ghana"
          investorRole="Software Engineer"
          investorCompany="Microsoft inc."
        />
        <HomeCard
          isInvestor={true}
          imgSrc="https://images.unsplash.com/photo-1668531282396-96bea4cacab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="John Doe"
          investorName="John Doe"
          investorNationality="Sudan"
          investorRole="Software Engineer"
          investorCompany="Microsoft inc."
        />
        <HomeCard
          isInvestor={true}
          imgSrc="rui-silvestre-jCeVRUQslTs-unsplash.jpg"
          alt="John Doe"
          investorName="John Doe"
          investorNationality="Kenya"
          investorRole="Software Engineer"
          investorCompany="Microsoft inc."
        />
      </div>
    </div>
  );
};
export const InvestorTestimonials = () => {
  return (
    <div>
    <div className="flex flex-row grid place-content-center  bg-miliki-gray">
    <div className="container mx-auto flex flex-row py-4 mt-3">
          <IconComponent icon={<IoIosRocket className="fill-miliki-blue" />} />
          <TitleComponent titleDetails="What our investors are saying" />
        </div>
        <div className="container mx-auto mb-[10px]">
          <p className="py-2 mr-5 text-start text-normal text-miliki-black">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five
          </p></div>
      <div className="container grid grid-cols-1 flex mx-auto mt-[75px] mb-[125px] place-content-center md:grid-cols-3">
        <HomeCard
          isInvestor={false}
          imgSrc2="rui-silvestre-jCeVRUQslTs-unsplash.jpg"
          alt2="profile"
        />
        <HomeCard
          isInvestor={false}
          imgSrc2="https://images.unsplash.com/photo-1637684666587-91e51b10a555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=462&q=80"
          alt2="profile"
        />
        <HomeCard
          isInvestor={false}
          imgSrc2="etty-fidele-AzVexpHvuKY-unsplash.jpg"
          alt2="profile"
        />
      </div>
    </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <MilikiNavbar isNavHome={true} />
      <HeroSection />
      <ExploreSection />
      <OfferSection />
      <FeaturedInvestors />
      <InvestorCards />
      <EventsFeatured />
      <InvestorTestimonials />
      <MilikiFooter />
    </div>
  );
};

export default Homepage;
