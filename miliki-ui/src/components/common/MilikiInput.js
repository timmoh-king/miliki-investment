import React from "react";

const MilikiInput = ({
  index,
  label,
  value,
  name,
  placeholder,
  inputType,
  onChange,
  inputStyle,
  labelStyle,
  required = false,
  isFormInput,
}) => {
  return (
    <div>
      {isFormInput ? (
        <>
          <label
            className={`block py-3 px-1 leading-normal items-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-blue font-bold font-inter font-[600] not-italic${
              labelStyle ? labelStyle : ""
            }`}
          >
            {label}
          </label>
          <input
            className={`px-1 py-2 h-[36px] lg:w-[509px] md:w-[254px] sm:w-[180px] rounded-lg bg-white leading-normal items-center lg:text-[14px] md:text-sm sm:text-xs text-miliki-black font-inter font-[400] not-italic ring-1 ring-miliki-blue shadow-md cursor-text hover:bg-miliki-gray focus:border-miliki-blue-600 focus:outline-none ${inputStyle ? inputStyle : ""}`}
            key={index}
            id={label}
            name={name}
            type={inputType}
            value={value}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
          />
        </>
      ) : (
        <>
        <label
            className={`block py-2 px-1 leading-normal items-center lg:text-[16px] md:text-[14px] sm:text-[12px] text-miliki-blue font-bold font-inter font-[600] not-italic${
              labelStyle ? labelStyle : ""
            }`}
          >
            {label}
          </label>
          <input
            className={`px-1 py-2 h-[36px] lg:w-[446px] md:w-[223px] sm:w-[110px] rounded-lg bg-white leading-normal items-center lg:text-base md:text-sm sm:text-xs text-miliki-black font-bold font-inter font-[400] not-italic ring-1 ring-miliki-blue shadow-md cursor-text hover:bg-miliki-gray focus:border-miliki-blue-600 focus:outline-none${inputStyle ? inputStyle : ""}`}
            key={index}
            id={label}
            name={name}
            type={inputType}
            value={value}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
};

export default MilikiInput;
