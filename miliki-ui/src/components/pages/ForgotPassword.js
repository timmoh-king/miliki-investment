import React from 'react'
import MilikiButton from "../common/MilikiButton";
import MilikiNavbar from "../common/MilikiNavbar";
import MilikiInput from "../common/MilikiInput";

const ForgotPassword = () => {
  return (
    <div>
    <MilikiNavbar />
    <div className="items-center mt-1">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-[640px] h-[768px] bg-gradient-to-b from-miliki-gray to-white">
          <p className="leading-normal mt-[206px] text-center text-miliki-blue lg:text-2xl md:text-xl sm:text-md font-inter font-[900] not-italic">
            Miliki <span className="text-miliki-sky-blue">investment</span>
          </p>
          <p className="mt-5 px-8 text-center text-miliki-black lg:text-[16px] md:text-[14px] sm:text-[12px]">
            is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not
            only five
          </p>
          <div className="flex flex-row mt-8 px-8 items-center">
            <p className="text-center text-miliki-black lg:text-[16px] md:text-[14px] sm:text-[12px]">
              Already have an account?
            </p>
            <MilikiButton
              buttonText="Explore"
              buttonStyle="bg-white mx-3 text-black ring-miliki-blue ring-[1px] h-[34px] hover:bg-miliki-blue hover:text-white hover:ring-[0px]"
            />
          </div>
        </div>
        <div className="w-[640px] h-[768px] bg-gradient-to-b from-white to-miliki-gray">
          <div className="mt-[216px] items-center">
              <MilikiInput isFormInput={true} label="Email" placeholder="Enter your email" inputType="text" required={true} />
              <MilikiButton buttonStyle="mt-8 mx-16" isButtonForm={true} buttonText="Change Password" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword
