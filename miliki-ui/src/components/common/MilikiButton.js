import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const MilikiButton = ({
  to,
  onClickButtonHandler,
  buttonText,
  buttonStyle,
  buttonType,
  isButtonForm,
}) => {
  if (to) {
    return (
      <>
        <Link
          to={to}
          className={`h-[36px] rounded-[5px] grid place-text-center bg-miliki-blue items-center leading-none text-white font-inter font-[900] not-italic transition-colors duration-400 ease-in-out hover:border-2 hover:bg-white hover:text-miliki-blue hover:ring-[1px] hover:ring-miliki-blue outline-offset-2 outline-miliki-dark-blue ${buttonStyle ? buttonStyle : ""}`}
          type={`${buttonType ? buttonType : ""}`}
          onClick={onClickButtonHandler}
        >
          {buttonText}
          {isButtonForm}
        </Link>
      </>
    );
  }
  return (
    <>
      {isButtonForm ? (
        <button
          className={`h-[36px] lg:w-[509px] md:w-[254px] sm:w-[180px] grid place-text-center rounded-[5px] bg-miliki-blue items-center leading-none text-white font-inter font-[900] not-italic transition-colors duration-400 ease-in-out hover:border-2 hover:bg-white hover:text-miliki-blue hover:ring-[1px] hover:ring-miliki-blue outline-offset-2 outline-miliki-dark-blue ${buttonStyle ? buttonStyle : ""}`}
          type={`${buttonType ? buttonType : ""}`}
          onClick={onClickButtonHandler}
        >
          {buttonText}
          {isButtonForm}
        </button>
      ) : (
        <button
          className={`h-[36px] lg:w-[130px] sm:w-[64px] rounded-[5px] grid place-text-center bg-miliki-blue items-center leading-none text-white font-inter font-[900] not-italic transition-colors duration-400 ease-in-out hover:border-2 hover:bg-white hover:text-miliki-blue hover:ring-[1px] hover:ring-miliki-blue outline-offset-2 outline-miliki-dark-blue ${buttonStyle ? buttonStyle : ""}`}
          type={`${buttonType ? buttonType : ""}`}
          onClick={onClickButtonHandler}
        >
          {buttonText}
          {isButtonForm}
        </button>
      )}
    </>
  );
};

MilikiButton.propTypes = {
    onClickButtonHandler: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    isButtonForm: PropTypes.bool.isRequired,
    buttonType: PropTypes.string,
    buttonStyle: PropTypes.string,
    to: PropTypes.string,
  };

export default MilikiButton;